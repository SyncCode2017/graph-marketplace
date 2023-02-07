import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CancelFilledOrder,
  CancelOpenOrder,
  OrderCreated,
  OrderDelivered,
  OrderFilled,
  Withdraw
} from "../generated/Marketplace/Marketplace"

export function createCancelFilledOrderEvent(
  id: BigInt,
  seller: Address,
  buyer: Address,
  item: string,
  qtty_bought: BigInt,
  price: BigInt,
  timestamp: BigInt
): CancelFilledOrder {
  let cancelFilledOrderEvent = changetype<CancelFilledOrder>(newMockEvent())

  cancelFilledOrderEvent.parameters = new Array()

  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromString(item))
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam(
      "qtty_bought",
      ethereum.Value.fromUnsignedBigInt(qtty_bought)
    )
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  cancelFilledOrderEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return cancelFilledOrderEvent
}

export function createCancelOpenOrderEvent(
  id: BigInt,
  seller: Address,
  item: string,
  qtty_to_sell: BigInt,
  price: BigInt,
  timestamp: BigInt
): CancelOpenOrder {
  let cancelOpenOrderEvent = changetype<CancelOpenOrder>(newMockEvent())

  cancelOpenOrderEvent.parameters = new Array()

  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromString(item))
  )
  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam(
      "qtty_to_sell",
      ethereum.Value.fromUnsignedBigInt(qtty_to_sell)
    )
  )
  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  cancelOpenOrderEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return cancelOpenOrderEvent
}

export function createOrderCreatedEvent(
  id: BigInt,
  seller: Address,
  item: string,
  qtty_to_sell: BigInt,
  price: BigInt,
  timestamp: BigInt
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromString(item))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "qtty_to_sell",
      ethereum.Value.fromUnsignedBigInt(qtty_to_sell)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return orderCreatedEvent
}

export function createOrderDeliveredEvent(
  id: BigInt,
  seller: Address,
  buyer: Address,
  item: string,
  qtty_bought: BigInt,
  price: BigInt,
  timestamp: BigInt
): OrderDelivered {
  let orderDeliveredEvent = changetype<OrderDelivered>(newMockEvent())

  orderDeliveredEvent.parameters = new Array()

  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromString(item))
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "qtty_bought",
      ethereum.Value.fromUnsignedBigInt(qtty_bought)
    )
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  orderDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return orderDeliveredEvent
}

export function createOrderFilledEvent(
  id: BigInt,
  seller: Address,
  buyer: Address,
  item: string,
  qtty_bought: BigInt,
  price: BigInt,
  timestamp: BigInt
): OrderFilled {
  let orderFilledEvent = changetype<OrderFilled>(newMockEvent())

  orderFilledEvent.parameters = new Array()

  orderFilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromString(item))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "qtty_bought",
      ethereum.Value.fromUnsignedBigInt(qtty_bought)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return orderFilledEvent
}

export function createWithdrawEvent(user: Address, amount: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
