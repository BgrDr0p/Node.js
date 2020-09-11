const url = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200,'', {'Content-Type': 'text/plain'})
    res.write('Bonjour')
    res.end();
})



app.listen(8000);