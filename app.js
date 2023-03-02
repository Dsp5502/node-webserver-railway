//  * express

//  * ## Instalación
const express = require('express');
const hbs = require('hbs');

// * Cargar variables de entorno
require('dotenv').config();

// * ## Uso
const app = express();

// * ## Puerto
const port = process.env.PORT;

// * handelbars
app.set('view engine', 'hbs');

//* partials
hbs.registerPartials(__dirname + '/views/partials');

//! Servir archivos estáticos
// * middleware
// * Las carpeta public tiene prioridad sobre las rutas
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando',
    titulo: 'Curso de Node',
  });
});
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo desde express !');
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de Node',
  });
});

// * Ruta '*' (cualquier ruta) que no existe
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(8080, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
