const express = require('express');
const ProductsService = require ('./../services/productService')
const validatorHandler = require ('./../middlewares/validatorHandler')
const { createProductSchema, updateProductSchema, getProductSchema } = require ('./../schemas/productSchema')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) =>{     // New route
    const products = await service.find();
    res.json(products);
  });

  router.get('/filter', (req, res) => {
    res.send('im a filter')
  });

  router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params; // ecma6 using: const { object to search in params }, no ecma (req.params.id)
        const product = await service.findone(id);
        res.json(product);
      } catch (error) {
        next(error);
      }
    }
  );

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => { // collect post data in json from postman or insomnia
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json(newProduct);
    }
  );

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => { // collect post data in json from postman or insomnia
    try{
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
      }
    }
);

router.delete('/:id', async (req, res) => { // delete data in json from postman or insomnia
  const { id } = req.params;
  const del = await service.delete(id);
  res.json(del);
});

module.exports = router;
