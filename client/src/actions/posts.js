import { FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from "../constants/actionTypes";
import * as api from "../api";

//ACTION CREATORS
export const getPosts  = () => async(dispatch) => {   //fetching all takes time so using redux thunk we create the additional arrow function async(dispatch)
    try{
        const { data } = await api.fetchPosts();
        // const action = { type : "FETCH_ALL" , payload: data }      //payload is where we store all of our posts
        const action = { type : FETCH_ALL , payload: data }  
        dispatch(action);       //using redux thunk we dispatch instead of returing the action
    }   
    catch(err){
        console.log(err);
    }
}

// export default getPosts;

export const createPost = (post) => async(dispatch) => {
    try{
        // console.log(post);
        const {data}  = await api.createPost(post);
        // console.log(data);
        // data.title  = "lol";
        
        // dispatch({ type : "CREATE" , payload : data });
        dispatch({ type : CREATE , payload : data });       //done to reduce error due to string typos
        
    }
    catch(err){
        console.log(`EOOO ${err}`);
    }
}

export const updatePost = (id,post) => async(dispatch) => {
    try{
        const {data} = await api.updatePost(id,post);

        // dispatch({type : "UPDATE" , payload : data });
        dispatch({type : UPDATE , payload : data })
    }
    catch(e){
        console.log(e);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        await api.deletePost(id);

        // dispatch({type : "DELETE" , payload : id});
        dispatch({type : DELETE , payload : id});
    }
    catch(err){
        console.log(err);
    }
}

export const likePost = (id) => async(dispatch) => {
    try{
        const {data} = await api.likePost(id);

        // dispatch({type : "LIKE" , payload : data });
        dispatch({type : LIKE , payload : data })
    }
    catch(err){
        console.log(err);
    }
}
    
    
   
    