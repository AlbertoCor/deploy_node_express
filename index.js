const express = require('express');
const routerApi = require('./routes')

const {logErrors, errorHandler,boomerrorHandler  } = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json()); // recive info from post data

app.get('/', (req, res) =>{     // Default route
  res.send("hello 1st server on express");
})

app.get('/new-route', (req, res) =>{     // New route
  res.send("hello im new route");
})

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port)
})

