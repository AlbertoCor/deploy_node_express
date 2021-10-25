const { response } = require('express');
const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) =>{     // New route
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for ( let index = 0; index < limit; index ++){
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    }
    res.json(products);
  });

  router.get('/filter', (req, res) => {
    res.send('im a filter')
  })
  
  router.get('/:id', (req, res) => {
    const {id} = req.params; // ecma6 using: const { object to search in params }, no ecma (req.params.id)
    res.json({
      id,
      name: "Product 02",
      price: 2000,
    });
  });

router.post('/', (req, res) => { // collect post data in json from postman or insomnia
  const body = req.body;
  res.json({
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