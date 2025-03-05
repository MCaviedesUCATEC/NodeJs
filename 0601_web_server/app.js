const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Pagina de inicio')
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World desde express')
  });

app.get('*', function (req, res) {
    res.send('404 | page not found')
  });


app.listen(8080)