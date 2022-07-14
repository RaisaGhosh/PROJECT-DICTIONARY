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