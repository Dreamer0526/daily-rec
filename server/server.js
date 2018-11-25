const express = require('express');
const path = require('path');

const app = express();

app.get('/:name', (req, res) => {
    res.send("HI, " + req.params.name);
})

app.listen(3001, () => {
    console.log('Server starts listening to port 3001...');
});