"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        DataAccess.mongooseConnect();
    }
    DataAccess.mongooseConnect = function () {
        // if already connected return connection
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    DataAccess.DB_CONNECTION_STRING = 'mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune';
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.mongooseConnect();
