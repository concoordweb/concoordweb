const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const msg = 'Repositorio do Concoord, Backend 10/07/2024 08:09\n'

  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});