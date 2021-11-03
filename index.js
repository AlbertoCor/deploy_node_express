const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const {logErrors, errorHandler,boomerrorHandler  } = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // recive info from post data

const whitelist = ['http://localhost:8080', 'https://myapp.co']; // list of locations to permit request
const options = { // callback function to validate origin to connect to api
  origin: (origin, callback) => {
    if ( whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback( new Error('no permit'));
    }
  }
}
app.use(cors());

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

