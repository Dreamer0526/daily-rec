const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:QWEqwe123@ds115244.mlab.com:15244/daily-rec', {
    useNewUrlParser: true
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

const _services = require('./services/_services');
_services(app);

app.listen(3001, () => {
    console.log('Server starts listening to port 3001...');
});