"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = 8080;
var server = new App_1.App().expressApp;
server.listen(port, function () { return console.log("server listening on port: " + port); });
