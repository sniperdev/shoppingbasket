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
    return total;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const basket = new Basket();
