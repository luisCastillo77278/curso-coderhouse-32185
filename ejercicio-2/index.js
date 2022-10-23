const Container = require('./models/Container');

const main = async () => {
  const listProducts = new Container()

  //todo guardar productos
  const nike = await listProducts.save({
    title: 'tenis nike',
    price: 150,
    thumbnail: 'nike.png'
  });

  await listProducts.save({
    title: 'tenis pumas',
    price: 140.50,
    thumbnail: 'pumas.png'
  })

  await listProducts.save({
    title: 'jersey barcelona',
    price: 120.60,
    thumbnail: 'barcelona.png'
  })

  //todo listar los productos
  const products = await listProducts.getAll()
  console.log(products)

  //todo buscar un elemento
  const product = await listProducts.getById(nike.id)
  console.log(product)

  //todo eliminar un elemento
  const deleteProduct = await listProducts.deleteById(nike.id)
  console.log(deleteProduct)

  //todo buscar un elemento
  const productsList = await listProducts.getAll()
  console.log(productsList)

  //todo eliminar todos los elementos
  //! Al ejecutar el proyecto y ejecutar esta instruccion
  //! se limpia el archivo products.json, ya que esta es la ultima instruccion
  const deleteAll = await listProducts.deleteAll()
  console.log(deleteAll)

}

main()