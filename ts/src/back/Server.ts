import { createServer } from 'http'
import { CoolChecker } from '../utils/CoolChecker.js';

const hostname = 'localhost';
const port = 8080;

const checker = new CoolChecker();

const server = createServer((req, res) => {
    console.log(`Got connection from ${req.url}`)
    res.statusCode = 200
    res.end('Hello from dump server!\n')
    checker.generateId();

})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});