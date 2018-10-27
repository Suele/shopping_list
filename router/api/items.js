const express = require('express');
const router = express.Router();

// importando o arquivo que está dentro da pasta model
const Item = require('../../model/Item');

// esta rota vai trazer todos os dados que Items tiver
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})// ordena os dados que serão mostrados.
    .then(items => res.json(items));
});

router.post('')

module.exports = router;