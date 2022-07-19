import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// https://www.restapitutorial.com/httpstatuscodes.html -> for the status codes

export const getPosts = async (req,res) => {
    // res.send("THIS WORKS");
    try{
        const postMessages  = await PostMessage.find();      //since it takes time, its asynchronous

        console.log(postMessages);

        res.status(200).json(postMessages);
    }
    catch(err){
        console.log("ERROR");
        res.status(404).json({message : err.message});
    }
}

export const createPost = async (req,res) => {
    // res.send("POST CREATION");
    const post= req.body;
    // console.log(post);
    // console.log(Object.keys(post));
    // console.log(JSON.parse(Object.keys(post)));
    // const newPost = new PostMessage(JSON.parse(Object.keys(post)));
    const newPost = new PostMessage(post);
    // newPost.title = "hi";

    try{
        console.log(newPost);
        await newPost.save();     //saving takes time
        
        res.status(201).json(newPost);
    }
    catch(err){
        console.log("ERROE")
        res.status(409).json({message : err.message});
    }
}

//http://..../posts/id
export const updatePost = async (req,res) => {
    const{ id : _id } = req.params;         // {original name : new name} = req.params
    
    const post = req.body;  //sent from frontend

    if(!mongoose.Types.ObjectId.isValid(_id))   res.status(404).send("No post with that id");

    // console.log(Object.values(post));
    // not required

    const updatedPost = await PostMessage.findByIdAndUpdate(_id , {...post,_id}, {new : true});

    res.json(updatedPost);
}


export const deletePost = async (req,res) => {
    const{ id : _id } = req.params;         
    const post = req.body;  

    if(!mongoose.Types.ObjectId.isValid(_id))   res.status(404).send("No post with that id");

    await PostMessage.findByIdAndRemove(_id);

    res.json({message : "POST DELTED SUCCESSFULLY"});
}

export const likePost = async (req,res) => {
    const{ id : _id } = req.params;         // {original name : new name} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(_id))   res.status(404).send("No post with that id");

    // console.log("ccccccccc");

    const post = await PostMessage.findById(_id);

    // console.log(Object.values(post));
    //{...post,_id} not required

    const updatedPost = await PostMessage.findByIdAndUpdate(_id , {likeCount : post.likeCount+1} , {new : true});

    res.json(updatedPost);
}
