const express = require('express')
const app = express()

//servir contenido estatico 
//utilizar middleware
app.use( express.static('public'));


app.get('/', function (req, res) {
  res.send('Pagina de inicio')
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World desde express')
  });

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  });


app.listen(8080)