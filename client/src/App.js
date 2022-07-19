import React,{ useEffect, useState } from "react";

import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

import {getPosts} from "./actions/posts.js"

import { useDispatch } from "react-redux";


const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();     // a hook
    
    const classes = useStyles();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);        //is working with including currentId but only for 1 change per reload, without it works for multiple changes on reload

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="transparent">
            <Typography className={classes.heading} variant="h2" align="center"><b>Project Dictionary</b></Typography>
            </AppBar>
{/* in="true" for <Grow> not given in video but without it the elements inside it isn't visible */}
            <br/>
            <Grow in>           
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} visibility="">
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;