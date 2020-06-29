const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('./app/router/router.js')(app);
const db = require('./app/config/db.config.js');

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync');
    initial();
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get('/', (req, res, next) => {
    res.send('Working');
});

function initial(){}

module.exports = app;