import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from "dotenv";

import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

app.use(cors());


//MIDDLEWARES
app.use(bodyParser.json({limit: "30 mb",extended : true}));       //setting limit of images sent = 30 mb
app.use(bodyParser.urlencoded({limit: "30 mb",extended : true}));

app.use("/posts",postRoutes);
// app.use(bodyParser.json());

app.use("/",(req,res)=>{
    res.send("Hello to Project Dictionary API");
})


// const CONNECTION_URL = "mongodb+srv://Raisa:testing123@cluster0.makeq.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5050;

//2 parameters (connection url, object with all the options-here the ones used are simply to not get warnings)
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => {           //because it returns a promise
        app.listen(PORT, () => {        //(Port,What to do after listening to port)
            console.log(`Server running on port ${PORT}`)
        });   
    })
    .catch((error) => {
        console.log(error);
    })

// mongoose.set("useFindAndModify" , false);   //to not get some warning