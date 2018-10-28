const express = require('express');
const router = express.Router();

// importando o arquivo que está dentro da pasta model
const Item = require('../../model/Item');

// esta rota vai trazer todos os dados que Items tiver.
// rota metodo GET api/items
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items));
});

// esta rota vai gravar um novo Item no BD.
// rota metodo POST api/items
router.post('/', (req, res) => {
  let newItem = new Item({
    name: req.body.name
  });

  // salva os dados no BD.
  newItem.save()
    .then(res.status(201).json({
      statusCode: 201, //Created
      mensagem: 'Item salvo no BD',
      createNewItem: newItem
    }));
});

// esta rota vai deletar um registro do BD.
// rota metodo delete api/items
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.status(200).json({
      statusCode: 200,// ok
      mensagem: 'Item deletado com sucesso'
    })))
    .catch(() => res.status(404).json({
      statusCode: 404,// not found
      mensagem: 'Item não encontrado'
    }));
});

module.exports = router;