const { mongo } = require('./dataproviders/database/odm/mongoose/mongoose');

const express = require('express'),
    app = express(),
    mongoose = require('./dataproviders/database/odm/mongoose/mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    ROUTER = require('./entrypoints/rest/router'),
    port = 4000;
    
mongoose.init()
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", ROUTER)

app.listen(port, (err) => {
    if (err) {
        console.log("listen err port: " + port);
    } else {
        console.log("listen success port: " + port)
    }
})



