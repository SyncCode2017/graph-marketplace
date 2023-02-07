import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CancelFilledOrder as CancelFilledOrderEvent,
  CancelOpenOrder as CancelOpenOrderEvent,
  OrderCreated as OrderCreatedEvent,
  OrderDelivered as OrderDeliveredEvent,
  OrderFilled as OrderFilledEvent
} from "../generated/Marketplace/Marketplace"
import {
  ActiveOrder,
  CancelFilledOrder,
  CancelOpenOrder,
  OrderCreated,
  OrderDelivered,
  OrderFilled
} from "../generated/schema"


export function handleCancelFilledOrder(event: CancelFilledOrderEvent): void {
  let entity: CancelFilledOrder | null= CancelFilledOrder.load((event.params.id).toString())
  let activeOrder: ActiveOrder | null = ActiveOrder.load(event.params.id.toString())
  if (!entity){
    entity = new CancelFilledOrder(event.transaction.hash.concatI32(event.logIndex.toI32()).toString())
  }

  entity.id = (event.params.id).toString()
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp
  activeOrder!.buyer = Address.fromString("0x000000000000000000000000000000000000dEAd") // dead address since it has been cancelled

  entity.save()
  activeOrder!.save()
}

export function handleCancelOpenOrder(event: CancelOpenOrderEvent): void {
  let entity: CancelOpenOrder | null = CancelOpenOrder.load((event.params.id).toString())
  let activeOrder: ActiveOrder | null = ActiveOrder.load((event.params.id).toString())
  if (!entity){
    entity = new CancelOpenOrder(event.transaction.hash.concatI32(event.logIndex.toI32()).toString())
  }

  entity.id = (event.params.id).toString()
  entity.seller = event.params.seller
  entity.item = event.params.item
  entity.qtty_to_sell = event.params.qtty_to_sell
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp
  activeOrder!.buyer = Address.fromString("0x000000000000000000000000000000000000dEAd") // dead address since it has been cancelled

  entity.save()
  activeOrder!.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity: OrderCreated | null= OrderCreated.load((event.params.id).toString())
  let activeOrder: ActiveOrder | null = ActiveOrder.load((event.params.id).toString())
  if (!entity) {
    entity = new OrderCreated(event.transaction.hash.concatI32(event.logIndex.toI32()).toString())
  }

  // Checking if the seller is just updating an exisiting listing
  if(!activeOrder){
    activeOrder = new  ActiveOrder(event.transaction.hash.concatI32(event.logIndex.toI32()).toString())
  }
  entity.id = (event.params.id).toString()
  activeOrder!.id = (event.params.id).toString()

  entity.seller = event.params.seller
  activeOrder!.seller = event.params.seller

  entity.item = event.params.item
  activeOrder!.item = event.params.item

  entity.qtty_to_sell = event.params.qtty_to_sell
  activeOrder!.qtty_to_sell = event.params.qtty_to_sell

  entity.price = event.params.price
  activeOrder!.price = event.params.price

  entity.timestamp = event.params.timestamp
  activeOrder!.timestamp = event.params.timestamp

  // activeOrder!.buyer = Address.fromString("0x0")

  entity.save()
  activeOrder!.save()
}

export function handleOrderDelivered(event: OrderDeliveredEvent): void {
  let entity = new OrderDelivered(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toString()
  )
  entity.id = (event.params.id).toString()
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {

  let entity: OrderFilled | null = OrderFilled.load((event.params.id).toString())
  let activeOrder: ActiveOrder = ActiveOrder.load(event.params.id.toString())!
  if (!entity){
    entity = new OrderFilled(event.transaction.hash.concatI32(event.logIndex.toI32()).toString())
  }
  
  entity.id = (event.params.id).toString()
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp
  activeOrder.buyer = event.params.buyer

  entity.save()
  activeOrder.save()
}
