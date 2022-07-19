import React from "react";
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";

import useStyles from "./styles";
// import Posts from "../Posts";

import {useDispatch} from "react-redux";

import { deletePost,likePost } from "../../../actions/posts";

const Post = ({post,setCurrentId}) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const viewMoreHandler = (e) => {
        e.preventDefault();
        setCurrentId(post._id);
    }

    const deletePostHandler = (e) => {
        e.preventDefault();
        dispatch(deletePost(post._id));
    }

    const likePostHandler = (e) => {
        e.preventDefault();
        dispatch(likePost(post._id));
    }
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} component="div" />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <button style={{color : "white" , backgroundColor : "initial"}} size="small" onClick={viewMoreHandler} >
                    <MoreHorizIcon fontSize="medium" />
                </button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" >{(post.tags).map((tag) => `#${tag} `)}</Typography>
            </div>
            <div>
                <Typography className={classes.title} variant="h5">{post.title}</Typography>
            </div>
            <CardContent>
                <Typography  variant="body1" color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                
                <Button size="small" color="primary" onClick={likePostHandler}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;         {/* &nbsp;  is code for space in JSX */}
                    {post.likeCount}
                </Button>

                <Button size="small" color="primary" onClick={deletePostHandler}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                
            </CardActions>
        </Card>
    );
}

export default Post;