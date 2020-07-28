const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');


const machineHandler = require('./machine/routeHandler');
const userHandler = require('./user/routeHandler');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 


app.use('/machine', machineHandler);
app.use('/', userHandler);

const port = process.env.PORT || 3000


app.listen(3000, (err) => {

    if(err)
        console.error(err);
    
    else 
        console.log(`Server running at port ${port}`);
    
})