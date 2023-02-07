import {
  CancelFilledOrder as CancelFilledOrderEvent,
  CancelOpenOrder as CancelOpenOrderEvent,
  OrderCreated as OrderCreatedEvent,
  OrderDelivered as OrderDeliveredEvent,
  OrderFilled as OrderFilledEvent,
  Withdraw as WithdrawEvent
} from "../generated/Marketplace/Marketplace"
import {
  CancelFilledOrder,
  CancelOpenOrder,
  OrderCreated,
  OrderDelivered,
  OrderFilled,
  Withdraw
} from "../generated/schema"

export function handleCancelFilledOrder(event: CancelFilledOrderEvent): void {
  let entity = new CancelFilledOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelOpenOrder(event: CancelOpenOrderEvent): void {
  let entity = new CancelOpenOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.seller = event.params.seller
  entity.item = event.params.item
  entity.qtty_to_sell = event.params.qtty_to_sell
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.seller = event.params.seller
  entity.item = event.params.item
  entity.qtty_to_sell = event.params.qtty_to_sell
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderDelivered(event: OrderDeliveredEvent): void {
  let entity = new OrderDelivered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {
  let entity = new OrderFilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.item = event.params.item
  entity.qtty_bought = event.params.qtty_bought
  entity.price = event.params.price
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
