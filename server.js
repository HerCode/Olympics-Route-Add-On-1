var express = require('express');

var index = require('./routes/index');
var app = express();

//static files
app.use(express.static('public'));

// Routers
// offloading the routes to our router file
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function() {
  var port =server.address().port;
console.log('Listening on port', port);
});
