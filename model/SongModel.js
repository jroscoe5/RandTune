"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var SongModel = /** @class */ (function () {
    function SongModel() {
        this.createSchema();
        this.createModel();
    }
    SongModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            // Public song info
            title: String,
            description: String,
            album: String,
            genre: String,
            // determines reviewability status
            review_count: Number,
            // user id
            musician: String,
            // mp3 file id
            mp3_id: String
        }, { collection: 'songs' });
    };
    SongModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Song", this.schema);
    };
    SongModel.prototype.retrieveSong = function (res, target) {
        var query = this.model.find(target);
        query.exec(function (err, song) {
            res.json(song);
        });
    };
    return SongModel;
}());
exports.SongModel = SongModel;
