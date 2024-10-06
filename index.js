const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:new request received\n`;
    fs.appendFile('text.txt', log, (err, data) => {
        res.end('hello,from server');
    })
    // res.end('hello,from server');
});
myServer.listen(8001, () => console.log('server statred'));