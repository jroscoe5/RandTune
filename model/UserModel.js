"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            // a user's public screen name (not unique) 
            username: String,
            // email (unique) and password are used to login
            email: String,
            password: String,
            // public description about user
            bio: String,
            // public profile links
            facebook: String,
            twitter: String,
            // private first and last name
            first_name: String,
            last_name: String,
            // private phone number potentially for password reset
            phone: String,
            // a user's monetary account balance 
            balance: Number,
            // an array of user's submitted reviews
            reviews: [{ reviewID: String }],
            // an array of a user's songs (if any)
            songs: [{ songID: String }]
        }, { collection: 'users' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    UserModel.prototype.retrieveUser = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, results) {
            response.json(results);
        });
    };
    UserModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, results) {
            response.json(results);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
