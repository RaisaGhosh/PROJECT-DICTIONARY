//connecting to the api we made

import axios from "axios";

const config = {
    headers:{
        "Content-Type": "application/json",
        'Accept': 'application/json'
    }
  };
  
// const url = "https://project-dictionary.herokuapp.com/posts";      //this link simply returns all the posts we have in db

// const url = "http://localhost:5050/posts"; 

const url = "https://project-dictionary.onrender.com/posts"; 


export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    // console.log(`api ${Object.keys(newPost)} , ${Object.values(newPost)}`);
    // const n = {
    //     title : "hi",
    //     creator : "rg",
    //     tags : "lol"
    // };
    return axios.post(url,newPost,config);

    // return axios.post(url,{ title : "hi",
    // creator : "rg",
    // tags : "lol" }, {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   })
    //     .then(response => {
    //       console.log(response.data);
    //     });
}

export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);