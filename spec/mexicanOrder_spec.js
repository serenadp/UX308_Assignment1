const Order = require("../Order");

describe("Restaurant Order Bot", function() {

  let order;

  beforeEach(function() {
    order = new Order();
  });

  it("orders a taco", function() {
    const result = order.placeOrder("taco", "small", "chicken", "coke");
    expect(result).toContain("taco");
  });

  it("orders a burrito", function() {
    const result = order.placeOrder("burrito", "large", "steak", "sprite");
    expect(result).toContain("burrito");
  });

  it("rejects invalid item", function() {
    const result = order.placeOrder("pizza", "large", "pepperoni", "coke");
    expect(result).toBe("Item not on menu");
  });

});