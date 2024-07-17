const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const routes = require('./routes.js');
const app = express();

//config

app.set('port', config.port)

//middleware
app.use(cors());
appp.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '25mb'}));
 
app.options('*', (req,res)=> {
    res.sendstatus(200); 
});

//routes
app.use(routes);

module.exports = app;