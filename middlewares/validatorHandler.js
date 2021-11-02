const boom = require("@hapi/boom");

function validatorHandler (schema, property){
    console.log('validatorHandler')
    return (req, res, next) => { // here we are creating a middleware comming a schema and use that data
        const data = req[property]; // dynamic data request
        // data collected in property one type from below options
        // req.body // data getting from post
        // req.params // if is an get data arrive in params
        // req.query // if data came from array
        const { error } = schema.validate(data, { abortEarly: false}); // abortEarly show all erros in code not one by one as default
        if (error){
            next(boom.badRequest(error));
        }
        next();
    }
  }

  module.exports = validatorHandler;
