"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ReviewModel = /** @class */ (function () {
    function ReviewModel() {
        this.createSchema();
        this.createModel();
    }
    ReviewModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            user_id: String,
            song_id: String,
            review_content: String,
            date: Date,
            rating: Number
        }), { collection: 'reviews' };
    };
    ReviewModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Review", this.schema);
    };
    ReviewModel.prototype.retrieveReviewsForID = function (response, id) {
        var query = this.model.find(id);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;
