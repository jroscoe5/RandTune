# RandTune
Web service for listenting and reviewing music


## [REST API Routes](https://docs.google.com/document/d/1p32VRTd7TEalaB6yXlx7dD3413zXV_6qL8d__VkNijA/edit)

| API Purpose | HTTP Verb | Express Route | Mongoose Model |
| :---------- | :-------- | :------------ | :------------- |
| Get mp3 file | GET | '/songs/raw/:mp3id' | Song.find({ :mp3id }) |
| Get song object | GET | '/songs/meta/:songid' | Song.find({ :songid }) |
| Get random song | GET | '/randomsong' | Song.findOneRandom({}) |
| Get all users | GET | '/users' | User.find({}) |
| Get one user | GET | '/users/:musicianid' | User.findOne({ :musicianid }) |
| Get one user | GET | '/users/profile/:email' | User.findOne({ :email }) |
| Get reviews submitted by a user | GET | '/users/profile/reviews/:id' | Review.find({ :id }) |
| Get one review | GET | '/reviews/:reviewid' | Review.findOne({ :reviewid }) |
| Post a song review | POST | '/upload/review/:userid/:songid/:content/:rating' | Review.create({ review }), User.updateOne({{:userid},{"$push": {reviews:{reviewID: reviewId.valueOf()}}}})|
