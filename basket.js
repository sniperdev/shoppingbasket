class Basket {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  showBasketTotalValue() {
    let total = 0;
    basket.products.forEach((product) => (total += product.price));
    return total.toFixed(2);
  }

  getBasketSummary() {
    return this.products.map((product, i) => {
      return {
        id: i + 1,
        text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`,
      };
    });
  }

  rem(id) {
    this.products.splice(id - 1, 1);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const basket = new Basket();
