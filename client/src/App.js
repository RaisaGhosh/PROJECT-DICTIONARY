import React,{ useEffect } from "react";

import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

import {getPosts} from "./actions/posts.js"

import { useDispatch } from "react-redux";


const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();     // a hook
    
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">PROJECT DICTIONARY</Typography>
                <img src={memories} alt="a dictionary for your projects" height="60"></img>
            </AppBar>
{/* in="true" for <Grow> not given in video but without it the elements inside it isn't visible */}
            <Grow in>           
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} visibility="">
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;