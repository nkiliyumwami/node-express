const express = require('express');

//Create express Router
const campsiteRouter = express.Router();

//Start the routing and add RestApi support endpoints routing method  
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)=> {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites`);
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

//Export the module so it can be used elsewhere
module.exports = campsiteRouter;

