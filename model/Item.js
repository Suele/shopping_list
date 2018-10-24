const mongoose = require('mongoose');

// cria a shema como foi especificado.
const ItemShema = new Schema({
  name: {
    type: String,
    required: true  
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', ItemShema);