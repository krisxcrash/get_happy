import express from 'express';
import path from 'path';
import open from 'open';
import favicon from 'serve-favicon';

/* eslint-disable no-console */

const port = 3000;
const app = express();

// app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(express.static(__dirname + '/'));

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))

app.listen(process.env.PORT || 8080);

// app.listen(port, function(err) {
//     if (err) {
//         console.log(err);
//     } 
//     else {
//         open(`http://localhost:${port}`);
//     }
// });