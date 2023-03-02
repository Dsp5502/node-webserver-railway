const http = require('http');

// !Crear un servidor
const server = http.createServer((req, res) => {
  res.write('Hola mundo');
  res.end();
});

// !Escuchar el servidor
server.listen(8080, () => {
  console.log('Server running on port 8080');
});
