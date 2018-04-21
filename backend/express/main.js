const express = require('express');
var session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');

import Connect from '../database/init';

Connect().then((message) => {
    console.log(message);

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
})
