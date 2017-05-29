// // ==============================================================================
// // DEPENDENCIES
// // Series of npm packages that we will use to give our server useful functionality
// // ==============================================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require('path');

// app.use(express.static('app/public'));
// app.use(express.static('./app'));

// // ================================================================================
// // Tells node that we are creating an "express" server
// var app = express();

// // ================================================================================
// // Sets an initial port. We"ll use this later in our listener
// var PORT = process.env.PORT || 8080;

// // ================================================================================
// // BodyParser makes it possible for our server to interpret data sent to it.
// // The code below is pretty standard.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // ================================================================================
// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give osur server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================
// //console.log('fooooooooooooooooooooo ' + require);
// require("./app/routing/apiRoutes.js")(app);
// //require("./app/routing/htmlRoutes.js")(app);

// // ==============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // ==============================================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });


// Post JSON of friend data at designated URL

 
// Friend finder App
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();   // Express
var PORT = process.env.PORT || 8080;

// Initiates Parsing via Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(express.static('app/public'));
app.use(express.static('./app'));
// app.use(express.static('app','public'));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

    
// Initiate listening
var server = app.listen(PORT, function() {
 console.log("App listening on PORT " + PORT + '\n');
});