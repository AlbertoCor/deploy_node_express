const express = require('express')

const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')

function routerApi( app ){
    const router = express.Router();
    app.use('/api/v1', router) // Use this router for dont use prefix on every section
    router.use('/products', productsRouter)
    router.use('/users', usersRouter)
    router.use('/categories', categoriesRouter)

    // we could put here a v2 similar to v1 structure
}

module.exports = routerApi;
