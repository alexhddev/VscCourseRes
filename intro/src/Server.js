import { createServer } from 'http'

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    console.log(`Got connection from ${req.url}`)
    res.statusCode = 200
    res.end('Hello from dump server!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});