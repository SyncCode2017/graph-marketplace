import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CancelFilledOrder } from "../generated/schema"
import { CancelFilledOrder as CancelFilledOrderEvent } from "../generated/Marketplace/Marketplace"
import { handleCancelFilledOrder } from "../src/marketplace"
import { createCancelFilledOrderEvent } from "./marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let item = "Example string value"
    let qtty_bought = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newCancelFilledOrderEvent = createCancelFilledOrderEvent(
      id,
      seller,
      buyer,
      item,
      qtty_bought,
      price,
      timestamp
    )
    handleCancelFilledOrder(newCancelFilledOrderEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CancelFilledOrder created and stored", () => {
    assert.entityCount("CancelFilledOrder", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "item",
      "Example string value"
    )
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "qtty_bought",
      "234"
    )
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "CancelFilledOrder",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
