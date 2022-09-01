const express = require('express');

const apiRouter = express.Router();

//import and mount sub api's
const quotesRouter = require('./quotesRouter');
apiRouter.use('/quotes', quotesRouter);


module.exports = apiRouter;