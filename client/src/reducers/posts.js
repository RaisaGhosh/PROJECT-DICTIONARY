const reducer = (posts = [],action) => {
    switch(action.type){
        case "FETCH_ALL":return action.payload;
                            break;
        case "CREATE"   ://console.log(`payload ${Object.keys(action.payload)}`)
                        return [...posts,action.payload];
                            break;
        default         : return posts;
                            break;
    }
}

export default reducer;