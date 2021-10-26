const express = require('express');

const ProductsService = require ('./../services/productService')

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) =>{     // New route
    const products = service.find();
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

router.post('/', (req, res) => { // collect post data in json from postman or insomnia
  const body = req.body;
  res.status(201).json({
    message: 'created', 
    data: body
  })
})

router.patch('/:id', (req, res) => { // collect post data in json from postman or insomnia
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update', 
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => { // delete data in json from postman or insomnia
  const { id } = req.params;
  res.json({
    message: 'deleted', 
    id,
  });
});
  
module.exports = router;