const express = require('express');
const router = express.Router();

// importando o arquivo que está dentro da pasta model
const Item = require('../../model/Item');

// esta rota vai trazer todos os dados que Items tiver.
// rota metodo GET api/items
router.get('/', (req, res) => {
	Item.find()
		.sort({
			date: -1
		}) // ordena os dados que serão mostrados.
		.then(items => res.json(items));
});

// esta rota vai enviar/gravar um novo Item.
// rota metodo POST api/items
router.post('/', (req, res) => {
	let newItem = new Item({
		name: req.body.name
	});
	
	// salva os dados no BD.
	newItem.save()
		.then(res.status(200).json({
			status: '200',
			mensagem: 'deu tudo certo',
			criaNewItem: newItem
		})
)
});

module.exports = router;