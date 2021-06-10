//Create an express webserver 
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res)=> {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

//Use the server or listen to Server
app.listen(port, hostname, ()=> {
    console.log(`Express Server running at http:// ${hostname}:${port}/`)
})
