import express from "express";
import bodyParser from "body-parser";

// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';

const router = express.Router();

// var urlencodedParser = bodyParser.urlencoded({limit: "30 mb",extended : false});
// var jsonParser = bodyParser.json({limit: "30 mb",extended : true});

 

router.get("/",getPosts);
router.post("/",createPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);
router.patch("/:id/likePost",likePost);


export default router;