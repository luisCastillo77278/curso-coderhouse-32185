
const HandlingError = {
  ErrorFind: (id) => ({
    message: `El elemento con ${id} no se encuentra`
  }),
  TrhowError: (err) => ({
    message: err
  }),
  Message: (message) => ({
    message
  })
}

module.exports = HandlingError;