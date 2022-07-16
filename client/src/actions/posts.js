import * as api from "../api";

//ACTION CREATORS
export const getPosts  = () => async(dispatch) => {   //fetching all takes time so using redux thunk we create the additional arrow function async(dispatch)
    try{
        const { data } = await api.fetchPosts();
        const action = { type : "FETCH_ALL" , payload: data }      //payload is where we store all of our posts
        dispatch(action);       //using redux thunk we dispatch instead of returing the action
    }   
    catch(err){
        console.log(err.message);
    }
}

// export default getPosts;

export const createPost = (post) => async(dispatch) => {
    try{
        // console.log(post);
        const {data}  = await api.createPost(post);
        // console.log(data);
        // data.title  = "lol";
        
        dispatch({ type : "CREATE" , payload : {data} });
        
    }
    catch(err){
        console.log(`EOOO ${err}`);
    }
}

    
    
    
   
    