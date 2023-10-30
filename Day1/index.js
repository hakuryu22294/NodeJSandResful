const http = require('node:http');
const port = 3000;

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'content-type': 'application/json'});
  res.end(`<h1 style="color:blue">Hi mina! Watashi wa Hakuryu</h1>`)
})
server.listen(3000, () => console.log(`Server listening on port ${port}`));