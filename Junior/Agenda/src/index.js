const express = require('express');
const routes = require('./routes')
const app = express();
app.use(routes)
const bodyparser = require('body-parser');
const { request } = require('express');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


require('./database')

const activities = [];







    app.listen(3333);

