const express = require('express');

const apiRouter = express.Router();

const quotesRouter = require('./quotesRouter');
apiRouter.use('/quotes', quotesRouter);


module.exports = apiRouter;