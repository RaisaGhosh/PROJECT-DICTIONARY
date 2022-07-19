import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import  {Grid,CircularProgress} from "@material-ui/core";


const Posts = ({setCurrentId}) => {
    // setCurrentId();         //resolving the issues temporarily
    
    const posts = useSelector((state) => state.posts);

    // console.log(posts);
    
    const classes = useStyles();

    // console.log(posts);

    return(
        !posts.length ? <CircularProgress/> : (             //!0 = true
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            {/* {console.log(`post is ${Object.values(post)}`)} */}
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;