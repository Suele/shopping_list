const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = Item = mongoose.model('Item', ItemShema);