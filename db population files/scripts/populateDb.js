// make sure mp3s are loaded using loadMusic.cmd
// collections we will be populating
db.createCollection('users')
userCollection = db.getCollection("users")
userCollection.remove({})

db.createCollection('songs')
songCollection = db.getCollection("songs")
songCollection.remove({})

db.createCollection('reviews')
reviewCollection = db.getCollection("reviews")
reviewCollection.remove({})

userCollection.insert({
    username: 'jonnie',
    email: 'jroscoe5@gmail.com',
    password: 'password1',
    bio: 'i like making music in my free time',
    facebook: '',
    twitter: '',
    first_name: 'Jonnie',
    last_name: 'Roscoe',
    phone: '2532246613',
    balance: 10000.23,
    reviews: [],
    songs: []
})

userCollection.insert({
    username: 'mafiag',
    email: 'mafiag@gmail.com',
    password: 'leagueolegends',
    bio: 'lover of old school hip hop',
    facebook: '',
    twitter: '',
    first_name: 'Jermaine',
    last_name: 'Vaughan',
    phone: '2535555281',
    balance: 37.70,
    reviews: [],
    songs: []
})

userCollection.insert({
    username: 'cobber',
    email: 'cchung@gmail.com',
    password: 'yumvegetables',
    bio: 'Write your bio here',
    facebook: '',
    twitter: '',
    first_name: 'Conner',
    last_name: 'Chung',
    phone: '8081123542',
    balance: 50.01,
    reviews: [],
    songs: []
})

userCollection.insert({
    username: 'fatekiller93',
    email: 'fatekiller93@gmail.com',
    password: 'hunter2',
    bio: 'Write your bio here',
    facebook: '',
    twitter: '',
    first_name: 'Robert',
    last_name: 'Westfield',
    phone: '7651234890',
    balance: 2.50,
    reviews: [],
    songs: []
})


// jroscoe5 is the artist of all songs in this sample
var musicianid = userCollection.findOne({email: 'jroscoe5@gmail.com'}, {_id: 1});

// Connect a song to its mp3
var mp3id = db.fs.files.findOne({filename: '..\\music\\whump.mp3'}, {_id: 1});
songCollection.insert({
    title: 'whump',
    description: 'description for whump',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'whump'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});

// repeat
mp3id = db.fs.files.findOne({filename: '..\\music\\untitled_11.mp3'}, {_id: 1});
songCollection.insert({
    title: 'untitled_11',
    description: 'description for untitled_11',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'untitled_11'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});

mp3id = db.fs.files.findOne({filename: '..\\music\\untitled_8.mp3'}, {_id: 1});
songCollection.insert({
    title: 'untitled_8',
    description: 'description for untitled_8',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'untitled_8'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});

//
mp3id = db.fs.files.findOne({filename: '..\\music\\untitled_5.mp3'}, {_id: 1});
songCollection.insert({
    title: 'untitled_5',
    description: 'description for untitled_5',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'untitled_5'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\untitled_4.mp3'}, {_id: 1});
songCollection.insert({
    title: 'untitled_4',
    description: 'description for untitled_4',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'untitled_4'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\ty $ on this.mp3'}, {_id: 1});
songCollection.insert({
    title: 'ty $ on this',
    description: 'description for ty $ on this',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'ty $ on this'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\star stealing loop.mp3'}, {_id: 1});
songCollection.insert({
    title: 'star stealing loop',
    description: 'description for star stealing loop',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'star stealing loop'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\Proud.mp3'}, {_id: 1});
songCollection.insert({
    title: 'Proud',
    description: 'description for Proud',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'Proud'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\pharaoh remaster.mp3'}, {_id: 1});
songCollection.insert({
    title: 'pharaoh remaster',
    description: 'description for pharaoh remaster',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'pharaoh remaster'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\nightmare.mp3'}, {_id: 1});
songCollection.insert({
    title: 'nightmare',
    description: 'description for nightmare',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'nightmare'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\miSTY moRNING HQ.mp3'}, {_id: 1});
songCollection.insert({
    title: 'miSTY moRNING HQ',
    description: 'description for miSTY moRNING HQ',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'miSTY moRNING HQ'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\happy noises.mp3'}, {_id: 1});
songCollection.insert({
    title: 'happy noises',
    description: 'description for happy noises',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'happy noises'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\guitar lullaby.mp3'}, {_id: 1});
songCollection.insert({
    title: 'guitar lullaby',
    description: 'description for guitar lullaby',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'guitar lullaby'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\glass them.mp3'}, {_id: 1});
songCollection.insert({
    title: 'glass them',
    description: 'description for glass them',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'glass them'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\bell banger.mp3'}, {_id: 1});
songCollection.insert({
    title: 'bell banger',
    description: 'description for bell banger',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'bell banger'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\chrono trappin.mp3'}, {_id: 1});
songCollection.insert({
    title: 'chrono trappin',
    description: 'description for chrono trappin',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'chrono trappin'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\Chill Out.mp3'}, {_id: 1});
songCollection.insert({
    title: 'Chill Out',
    description: 'description for Chill Out',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: 'Chill Out'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});
//
mp3id = db.fs.files.findOne({filename: '..\\music\\8bit Nostalgia.mp3'}, {_id: 1});
songCollection.insert({
    title: '8bit Nostalgia',
    description: 'description for 8bit Nostalgia',
    album: '',
    genre: 'electronic',
    review_count: 100,
    musician: musicianid._id.valueOf(),
    mp3_id: mp3id._id.valueOf()
})
var songid = songCollection.findOne({title: '8bit Nostalgia'},{_id: 1});
userCollection.update({email: "jroscoe5@gmail.com"},{"$push": {songs:{songID: songid._id.valueOf()}}});

// Add reviews
var userid = userCollection.findOne({email: 'cchung@gmail.com'},{_id :1});
var songid = songCollection.findOne({title: 'Chill Out'},{_id: 1});
reviewCollection.insert({
    user_id: userid._id.valueOf(),
    song_id: songid._id.valueOf(),
    review_content: 'I like this song',
    date: new Date(),
    rating: 5
})
var reviewid = reviewCollection.findOne({user_id: userid._id.valueOf(), song_id: songid._id.valueOf()},{_id: 1});
userCollection.update({email: "cchung@gmail.com"},{"$push": {reviews:{reviewID: reviewid._id.valueOf()}}});

var songid = songCollection.findOne({title: 'glass them'},{_id: 1});
reviewCollection.insert({
    user_id: userid._id.valueOf(),
    song_id: songid._id.valueOf(),
    review_content: 'I like this song',
    date: new Date(),
    rating: 4.5
})
var reviewid = reviewCollection.findOne({user_id: userid._id.valueOf(), song_id: songid._id.valueOf()},{_id: 1});
userCollection.update({email: "cchung@gmail.com"},{"$push": {reviews:{reviewID: reviewid._id.valueOf()}}});

var songid = songCollection.findOne({title: 'untitled_4'},{_id: 1});
reviewCollection.insert({
    user_id: userid._id.valueOf(),
    song_id: songid._id.valueOf(),
    review_content: 'I like this song',
    date: new Date(),
    rating: 4
})
var reviewid = reviewCollection.findOne({user_id: userid._id.valueOf(), song_id: songid._id.valueOf()},{_id: 1});
userCollection.update({email: "cchung@gmail.com"},{"$push": {reviews:{reviewID: reviewid._id.valueOf()}}});


var userid = userCollection.findOne({email: 'mafiag@gmail.com'},{_id :1});
var songid = songCollection.findOne({title: 'Chill Out'},{_id: 1});
reviewCollection.insert({
    user_id: userid._id.valueOf(),
    song_id: songid._id.valueOf(),
    review_content: 'I dont like this song',
    date: new Date(),
    rating: 2
})
var reviewid = reviewCollection.findOne({user_id: userid._id.valueOf(), song_id: songid._id.valueOf()},{_id: 1});
userCollection.update({email: "mafiag@gmail.com"},{"$push": {reviews:{reviewID: reviewid._id.valueOf()}}});

var songid = songCollection.findOne({title: 'untitled_8'},{_id: 1});
reviewCollection.insert({
    user_id: userid._id.valueOf(),
    song_id: songid._id.valueOf(),
    review_content: 'I dont like this song',
    date: new Date(),
    rating: 2
})
var reviewid = reviewCollection.findOne({user_id: userid._id.valueOf(), song_id: songid._id.valueOf()},{_id: 1});
userCollection.update({email: "mafiag@gmail.com"},{"$push": {reviews:{reviewID: reviewid._id.valueOf()}}});