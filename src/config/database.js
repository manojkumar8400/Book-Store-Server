const mongoose = require('mongoose')

// both options (useNewUrlParser and useUnifiedTopology) are used to ensure compatibility and optimal performance when connecting to a MongoDB database using Mongoose in modern Node.js applications.
const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongoose connected with server: ${data.connection.host}`)
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = connectDataBase
