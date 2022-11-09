class Basket {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const basket = new Basket();
