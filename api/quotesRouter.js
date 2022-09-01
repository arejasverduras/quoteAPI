const express = require('express');
const {quotes} = require('../data');
const {getRandomElement} = require('../utils');

const quotesRouter = express.Router();

const qR = quotesRouter;

//write actual routes here
qR.get('/', (req, res, next) => {
    let returnedQuotes;
    if (req.query.person) {
        returnedQuotes = quotes.filter((quote => quote.person === req.query.person))
    } else {
        returnedQuotes = quotes;
    }
    res.send({
        quotes: returnedQuotes
    });
});

qR.get('/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    res.send({
        quote: quote
    })
});

qR.post('/', (req, res, next) => {
    if (!req.query.person || !req.query.quote){
        res.status(400).send();
    } else {
        const newQuote = {
            quote: req.query.quote,
            person: req.query.person
        }
        quotes.push(newQuote);
        res.send({quote: newQuote})
    }
})


module.exports = quotesRouter;