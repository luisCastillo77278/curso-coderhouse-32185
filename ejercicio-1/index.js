class Producto {
  id;
  title;
  price;
  thumbnail;

  constructor(title, price, thumbnail) {
    this.id = Math.random().toString(36).slice(2);
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}

class Contenedor {

  #productos;

  constructor() {
    this.#productos = [];
  }

  save({ title, price, thumbnail }) {
    const producto = new Producto(title, price, thumbnail);
    this.#productos.push(producto);
    return producto;
  }

  getById(id) {
    return this.#productos.find(producto => producto.id === id);
  }

  getAll() {
    return this.#productos;
  }

  deleteById(id) {
    this.#productos = this.#productos.filter(producto => producto.id !== id);
  }

  deleteAll() {
    this.#productos = []
  }
}

const listProducts = new Contenedor()

const product = listProducts.save({
  title: 'jersey barcelona',
  price: 15.50,
  thumbnail: 'jersey-barcelona.jpg'
})

listProducts.save({
  title: 'jersey real madrid',
  price: 14.50,
  thumbnail: 'jersey-madrid.jpg'
})

console.log({ product: listProducts.getById(product.id) })
console.log({ products: listProducts.getAll() })

listProducts.deleteById(product.id)
console.log({ products: listProducts.getAll() })
listProducts.deleteAll()
console.log({ products: listProducts.getAll() })
