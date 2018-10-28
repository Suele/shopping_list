const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// atribuindo o caminho a variavel items
const items = require('./router/api/items');

//middleware body-parser
app.use(bodyParser.json());

//vai estabelecer conexão com o bd
mongoose.connect('mongodb://localhost/mern_shopping');

//verifica se houve uma conexão com o bd ou não
mongoose.connection
  .then(() => {
    console.log('>>>>> connected mongoDB')
  })
  .catch(err => console.log(err));

// usando a rotas items
app.use('/api/items', items);

//abre conexão não porta 3000.	
app.listen(3001, () => {
  console.log('>>>>> server online');
});