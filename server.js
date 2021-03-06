var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Tells node that we are creating an "express" server
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/data/")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });