const express = require("express");
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

const app = express();

// require db connection
require('./models');

// routes
var todoRouter = require('./routes/todos');

// app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// routes
app.get('/', function (req, res) {
    res.redirect("/api/todos");
})
app.use('/api/todos' , todoRouter)

// it serves static assets
app.use(express.static('client/build'));

// listener
app.listen(port, function () {
    console.log("Sever is ON !!!!" + port)
})