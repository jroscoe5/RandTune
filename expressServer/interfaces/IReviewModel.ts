import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    _id:any;
    // id of reviews's author
    author_id: string;
    // id song specific to review
    song_id: string;
    // body of the review
    review_content: string;
    // date created
    date: any;
    // rating on scale 1-5
    rating: number;
}
export{IReviewModel}