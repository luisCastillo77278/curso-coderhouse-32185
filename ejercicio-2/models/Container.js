const Product = require('./Product');
const {
  writeFile,
  readFile,
  HandlingError
} = require('../utilities');

class Container {

  async getDataBase() {
    return await readFile()
  }

  async save({ title, price, thumbnail }) {
    try {
      const products = await this.getDataBase();
      const product = new Product(title, price, thumbnail);

      products.push(product)

      await writeFile(products)
      return product;
    } catch (err) {
      return HandlingError.TrhowError(err)
    }
  }

  async getById(id) {
    try {
      const products = await this.getDataBase();
      const product = products.find(product => product.id === id);

      if (!product)
        return HandlingError.ErrorFind(id)

      return product;
    } catch (err) {
      return HandlingError.TrhowError(err)
    }
  }

  async getAll() {
    try {
      return await this.getDataBase();
    } catch (err) {
      return HandlingError.TrhowError(err)
    }
  }

  async deleteById(id) {
    try {
      const products = await this.getDataBase()
      const index = products.findIndex(product => product.id === id)

      if (index === -1)
        return HandlingError.ErrorFind(id)

      const product = products[index];
      products.splice(index, 1);
      await writeFile(products);
      return product;
    } catch (err) {
      return HandlingError.TrhowError(err)
    }
  }

  async deleteAll() {
    try {
      await writeFile([])
      return HandlingError.Message('Los elementos fueron eliminados')
    } catch (err) {
      return HandlingError.TrhowError(err)
    }
  }
}

module.exports = Container;