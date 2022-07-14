import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,     //convert img into string using base 64
    likeCount : {
        type : Number,
        default : 0,
    },
    createdAt : {
        type : Date,
        default : new Date(),
    },
});

export default mongoose.model("PostMessage",postSchema);