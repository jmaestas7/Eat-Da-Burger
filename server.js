var express = require('express');
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080; 

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

app.listen(PORT, function() {
    console.log("Please go to PORT: " + PORT);
  });