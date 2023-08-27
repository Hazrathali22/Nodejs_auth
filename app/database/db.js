const mongoose = require('mongoose');

const connectMongoose = () => {
  mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove the deprecated options
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));
};

module.exports = { connectMongoose };
