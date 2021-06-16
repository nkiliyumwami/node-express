//Create an express webserver 
const express = require('express');
const morgan = require('morgan');

//Import the modules
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

//Using Morgan Middleware 
app.use(morgan('dev'));

//Using Json Middleware to parse json data 
app.use(express.json());

//Set the route paths
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

app.use('/:campsiteId', campsiteRouter);

app.use('/:promotionId', promotionRouter);



//Set our server to serve static files
app.use(express.static(__dirname + '/public'));

app.use((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

//Use the server or listen to Server
app.listen(port, hostname, ()=> {
    console.log(`Express Server running at http://${hostname}:${port}/`)
});



