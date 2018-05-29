# RandTune
Web service for listenting and reviewing music


##REST API Routes

| API Purpose | HTTP Verb | Express Route | Mongoose Model |
| :---------- | :-------- | :------------ | :------------- |
| Get mp3 file | GET | '/songs/raw/:songid' | Song.find({ _id: songid}) |
