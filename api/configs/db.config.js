const mongoose = require('mongoose');

mongoose
  .connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo!'))
  .catch((error) => console.error(error));

module.exports = mongoose;
