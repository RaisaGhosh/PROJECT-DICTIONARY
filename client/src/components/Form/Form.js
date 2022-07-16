import React,{useState} from "react";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator : "" , title : "" , message : "" ,tags : "" ,selectedFile : "",
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) =>  {
        e.preventDefault();
        // console.log(postData);
        dispatch(createPost(postData));
    }

    const clear = () => {

    }
    
    return(
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">Talk about your project</Typography>
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
                onChange={(e) => setPostData({...postData,tags : e.target.value})}                         //most imp
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
                <Button variant = "contained" color = "secondary" size = "small" onClick={clear} fullWidth>
                    CLEAR
                </Button>
            </form>
        </Paper>
    );
}

export default Form;