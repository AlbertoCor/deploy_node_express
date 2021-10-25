const express = require('express');

const router = express.Router();

router.get("/:categoryId/products/:productId", (req,res) => { // endpoint from 2 variable states  with endid
    const {categoryId, productId} = req.params; // define const that variable entrypoints
    res.json({ // send in json response
      categoryId,
      productId,
    });
  });

  module.exports = router;
  