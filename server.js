const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./router/api/items');

//middleware body-parser
app.use(bodyParser.json());

//vai estabelecer conexão com o bd
mongoose.connect('mongodb://localhost/mern_shopping');

//verifica se houve uma conexão com o bd ou não
mongoose.connection
	.then(() => {console.log('>>>>> connected mongoDB')})
	.catch(err => console.log(err));

// rotas
app.use('/api/items', items);	

app.listen(3000, () => {
	console.log('>>>>> server online');
});	
