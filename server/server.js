const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:QWEqwe123@ds115244.mlab.com:15244/daily-rec', {
    useNewUrlParser: true
});

const app = express();
app.use("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use(bodyParser.json());

const runServices = require('./services');
runServices(app);

app.listen(3001, () => {
    console.log('Server starts listening to port 3001...');
});
