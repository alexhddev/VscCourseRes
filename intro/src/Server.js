import { createServer } from 'http'

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
    console.log(`Got connection from ${req.url}`)
    res.statusCode = 200
    res.end('Hello from dump server!\n')
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});