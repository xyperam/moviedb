const initialState={
    movies:[],
    genresLoaded: false,
    genres:[],
    moviesLoaded:false,
}


const homeReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_MOVIES":
            return{
                ...state,
                movies:action.payload,
                moviesLoaded:true,
            }
        case "GET_GENRES":
            return{
                ...state,
                genres:action.payload,
                genresLoaded:true,
            }
        default:
            return state;
    }
}

export default homeReducer;