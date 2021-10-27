const express = require('express');

const ProductsService = require ('./../services/productService')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) =>{     // New route
    const products = await service.find();
    res.json(products);
  });

  router.get('/filter', (req, res) => {
    res.send('im a filter')
  });

  router.get('/:id', (req, res) => {
    const {id} = req.params; // ecma6 using: const { object to search in params }, no ecma (req.params.id)
    const product = service.findone(id);
    res.json(product);
  });

router.post('/', async (req, res) => { // collect post data in json from postman or insomnia
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => { // collect post data in json from postman or insomnia
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => { // delete data in json from postman or insomnia
  const { id } = req.params;
  const del = await service.delete(id);
  res.json(del);
});

module.exports = router;
