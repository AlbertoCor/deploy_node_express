const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query; // data query type consul params tipe add ?consultcpnvention params
    if (limit && offset)  {  // validation of data in endpoint
      res.json({
        limit,
        offset
      });
    } else {
      res.send('not exist params'); // message to show if not found data
    }
  });

  module.exports = router;