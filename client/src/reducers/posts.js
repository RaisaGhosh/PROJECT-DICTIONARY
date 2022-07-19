import { FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from "../constants/actionTypes";

const reducer = (posts = [],action) => {
    switch(action.type){
        case FETCH_ALL :
            return action.payload;
            break;

        case CREATE :
            //console.log(`payload ${Object.keys(action.payload)}`)
            return [...posts,action.payload];
            break;

        case UPDATE :
        // case "LIKE" :       //since both do same thing
        return posts.map((post) =>                      //array.map() returns an array
        post._id === action.payload._id ? action.payload : post );
        break;

        case DELETE : 
        return posts.filter((post) => 
        post._id !== action.payload);
        break;

        case LIKE : 
        return posts.map((post) =>                      
        post._id === action.payload._id ? action.payload : post );
        break;

        default : 
        return posts;
        break;
    }
}

export default reducer;