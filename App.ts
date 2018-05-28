import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
import * as stream from 'stream';

import {DataAccess} from './DataAccess';
import {SongModel} from './model/SongModel';
import {UserModel} from './model/UserModel';
import {ReviewModel} from './model/ReviewModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  // mongoose models
  public Songs:SongModel;
  public Users:UserModel;
  public Reviews:ReviewModel;
  public db;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.dbConnection();
    this.middleware();
    this.routes();
    this.Songs = new SongModel();
    this.Users = new UserModel();
    this.Reviews = new ReviewModel();
  }

  // Use a mongoDB connection to fetch raw song data from db
  private dbConnection(): void{
    mongodb.MongoClient.connect('mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune', (err, database) => {
      //mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune
      
      if (err) {
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
      }
      this.db = database;
      console.log('MP3 mongodb connection established');
      });
  }
  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    let router = express.Router();
    
    // Get an mp3 file from the db
    // https://medium.com/@richard534/uploading-streaming-audio-using-nodejs-express-mongodb-gridfs-b031a0bcb20f
    // http://mongodb.github.io/node-mongodb-native/3.0/api/GridFSBucket.html#openDownloadStream
    router.get('/songs/songdata/:songid', (req, res) => {
      var mp3Id = new mongodb.ObjectID(req.params.songid);
      console.log("Fetching data for mp3 with id: " + mp3Id);
      res.set('content-type', 'audio/mp3');
      res.set('accept-ranges', 'bytes');
      let bucket = new mongodb.GridFSBucket(this.db, {
        bucketName: 'fs'
      });
      let downloadStream = bucket.openDownloadStream(mp3Id);
      downloadStream.on('data', (chunk) => {
        res.write(chunk);
      });
      downloadStream.on('error', () => {
        res.sendStatus(404);
      });
      downloadStream.on('end', () => {
        res.end();
      });
    });

    router.get('/users', (req, res)=> {
      console.log("Requesting all users in db");
      this.Users.retrieveAllUsers(res);
    })
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
    this.expressApp.use('/', express.static(__dirname+'/pages'));

    
  }

}

export {App};