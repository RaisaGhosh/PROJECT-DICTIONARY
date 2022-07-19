import React,{useState, useEffect} from "react";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

//GET THE CURRENT ID OF THE POST

const Form = ({currentId , setCurrentId}) => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator : "" , title : "" , message : "" ,tags : "" ,selectedFile : "",
    });

    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));  //only data for updated post

    const dispatch = useDispatch();

    useEffect(()=>{
        // console.log(`"mmmm" ${Object.values(postData)}`);
        if(post){
            // console.log(`"hi" ${Object.values(post)}`)
            setPostData(post);
        }
        // console.log(`"rrrrr" ${Object.values(postData)}`);
        // console.log(`"jjjj" ${currentId}`);
    },[post])

    const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log(postData);
        console.log(currentId);
        if(currentId === 0){     //if current Id is not null
            dispatch(createPost(postData));
            clear();
        }
        else{
            dispatch(updatePost(currentId,postData));
            clear();
        } 
        // window.location.reload(false); 
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({creator : "" , title : "" , message : "" ,tags : "" ,selectedFile : "",});
    }
    
    return(
        <Paper className="classes.paper" variant="outlined">
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center"><i>{(postData._id !== currentId) ? "Talk about your new project" : "Edit and Update your existing project"}</i></Typography>
                {/* FOR CREATOR */}
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={postData.creator}                            //most imp
                onChange={(e) => setPostData({...postData,creator : e.target.value})}                         //most imp
                />
                {/* FOR PROJECT NAME */}
                 <TextField 
                name="title" 
                variant="outlined" 
                label="Project Title" 
                fullWidth
                value={postData.title}                            //most imp
                onChange={(e) => setPostData({...postData,title : e.target.value})}                         //most imp
                />
                {/* FOR PROJECT DESCRIPTION */}
                 <TextField 
                name="message" 
                variant="outlined" 
                label="Project Description" 
                fullWidth
                value={postData.message}                            //most imp
                onChange={(e) => setPostData({...postData,message : e.target.value})}                         //most imp
                />
                {/* FOR TAGS */}
                <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth
                value={postData.tags}                            //most imp
                onChange={(e) => setPostData({...postData,tags : e.target.value.split(",")})} //split(",") splits the text separated by ,                        //most imp
                />
                {/* FOR FILE UPLOAD */}
                <div className={classes.fileInput}>
                    <FileBase64
                        type = "file"
                        multiple = {false}
                        onDone = {({base64}) => setPostData({...postData,selectedFile : base64})}
                    />
                </div>
                {/* FOR SUBMIT AND CLEAR BUTTON */}
                <Button className={classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>
                    SUBMIT
                </Button>
                <Button className={classes.buttonClear} variant = "contained" color = "secondary" size = "small" onClick={clear} fullWidth>
                    CLEAR
                </Button>
            </form>
        </Paper>
    );
}

export default Form;