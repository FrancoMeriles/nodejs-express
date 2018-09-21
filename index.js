const express = require ('express');
const morgan = require ('morgan');

const app = express();

app.listen(3000, function() {
    console.log("Server Ready")
    console.log('Nombre de la App', app.get('app'));
})

// Settings

app.set('app', 'Mi primer server');
// Middlewares morgan

app.use (morgan('combined'));

/*

NATIVE EXPRESS MIDDLEWARES

app. use(function(req, res, next) {
    console.log('request url: ' + req.url);
    next();    
});

app.use( (req, res, next) => {
    console.log('Passed Success');
    next();
});

*/

// Routes

app.get('/', (req, res) => {
    res.end("Hello World");
})

app.get('/login', (req, res) => {
    res.end("Login Route");
})

app.get('*', (req, res) => {
    res.end("Route not found");
})