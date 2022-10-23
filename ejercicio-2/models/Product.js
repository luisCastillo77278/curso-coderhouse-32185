const crypto = require('crypto');

class Product {
  id;
  title;
  price;
  thumbnail;

  constructor(title, price, thumbnail) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}

module.exports = Product;