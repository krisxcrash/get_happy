const express = require('express');
const path = require('path');
const open = require('open');

/* eslint-disable no-console */

const PORT = 8080;
const app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.PORT || 5000);