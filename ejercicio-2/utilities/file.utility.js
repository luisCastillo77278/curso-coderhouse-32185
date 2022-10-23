const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, '../data/products.txt');

const readFile = async () => {
  try {
    if (!fs.existsSync(pathFile))
      return []

    const products = await fs.promises.readFile(
      pathFile,
      { encoding: 'utf-8' }
    );
    return JSON.parse(products);

  } catch (err) {
    throw err
  }
}

const writeFile = async (products) => {
  try {
    await fs.promises.writeFile(
      pathFile,
      JSON.stringify(products, null, 2)
    );
  } catch (err) {
    throw err
  }
}

module.exports = {
  readFile,
  writeFile
}