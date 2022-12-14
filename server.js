const express = require('express');
const app = express();

const { getRandomElement } = require('./utils');

app.use(express.static('public'));

//import & mount apiRouter
const apiRouter = require('./api/api');
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4001;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});