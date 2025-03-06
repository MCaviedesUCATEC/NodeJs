require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs,hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Miguel Caviedes',
    titulo: 'Curso basico NodeJs'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Miguel Caviedes',
    titulo: 'Curso basico NodeJs'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Miguel Caviedes',
    titulo: 'Curso basico NodeJs'
  });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  });


  app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});