class Order {

  constructor() {
    this.menu = {
      taco: {
        sizes: ["small", "large"],
        fillings: ["chicken", "beef"]
      },

      burrito: {
        sizes: ["small", "large"],
        fillings: ["veggie", "steak"]
      }
    };

    this.drinks = ["coke", "sprite"];
  }

  placeOrder(item, size, filling, drink) {

    if (!this.menu[item]) {
      return "Item not on menu";
    }

    if (!this.menu[item].sizes.includes(size)) {
      return "Invalid size";
    }

    if (!this.menu[item].fillings.includes(filling)) {
      return "Invalid filling";
    }

    let result = `${size} ${filling} ${item} ordered`;

    if (this.drinks.includes(drink)) {
      result += ` with ${drink}`;
    }

    return result;
  }

}

module.exports = Order;