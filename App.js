"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var mongodb = require("mongodb");
var bodyParser = require("body-parser");
var SongModel_1 = require("./model/SongModel");
var UserModel_1 = require("./model/UserModel");
var ReviewModel_1 = require("./model/ReviewModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.dbConnection();
        this.middleware();
        this.routes();
        this.Songs = new SongModel_1.SongModel();
        this.Users = new UserModel_1.UserModel();
        this.Reviews = new ReviewModel_1.ReviewModel();
    }
    // Use a mongoDB connection to fetch raw song data from db
    App.prototype.dbConnection = function () {
        var _this = this;
        mongodb.MongoClient.connect('mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune', function (err, database) {
            //mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune
            if (err) {
                console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
            }
            _this.db = database;
            console.log('MP3 mongodb connection established');
        });
    };
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        // Get an mp3 file from the db
        // https://medium.com/@richard534/uploading-streaming-audio-using-nodejs-express-mongodb-gridfs-b031a0bcb20f
        // http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openDownloadStream
        router.get('/songs/songdata/:songid', function (req, res) {
            var mp3Id = new mongodb.ObjectID(req.params.songid);
            console.log("Fetching data for mp3 with id: " + mp3Id);
            res.set('content-type', 'audio/mp3');
            res.set('accept-ranges', 'bytes');
            var bucket = new mongodb.GridFSBucket(_this.db, {
                bucketName: 'fs'
            });
            var downloadStream = bucket.openDownloadStream(mp3Id);
            downloadStream.on('data', function (chunk) {
                res.write(chunk);
            });
            downloadStream.on('error', function () {
                res.sendStatus(404);
            });
            downloadStream.on('end', function () {
                res.end();
            });
        });
        router.get('/users', function (req, res) {
            console.log("Requesting all users in db");
            _this.Users.retrieveAllUsers(res);
        });
        // router.get('/songs', (req, res) => {
        //     console.log('Query all songs in db');
        //     this.Songs.retrieveAllSongs(res);
        // });
        // router.get('/newsong', (req, res) => {
        //     console.log('Query random song from song collection');
        //     this.Songs.retrieveRandom(res);
        // });
        // router.get('/users/:target/songs',(req,res) =>{
        //     var target = req.params.target;
        //     console.log("Query all songs by: " + target);
        //     this.Songs.retrieveAllSongsForMusician(res, {musician: target});
        // });
        // router.get('/users/:target',(req,res) => {
        //     var target = req.params.target;
        //     console.log("Query user info for: " + target);
        //     this.Listener.retrieveListener(res, {email: target});
        // });
        // router.get('/users/:target/reviews',(req,res) => {
        //     var target = req.params.target;
        //     console.log("Query all review for user: " + target);
        //     this.Reviews.retrieveReviewsForID(res, {user_id: target});
        // });
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
