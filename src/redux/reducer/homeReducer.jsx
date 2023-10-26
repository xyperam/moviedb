const initialState={
    movies:[],
    genresLoaded: false,
    genres:[],
    moviesLoaded:false,
    popularmovies:[],
    popularmoviesLoaded:false,
    setMovies:[],
    setMoviesLoaded:false,
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
            case "GET_POPULAR_MOVIES":
                return{
                    ...state,
                    popularmovies:action.payload,
                    popularmoviesLoaded:true,
                }
                case "SEARCH_MOVIES":
                    return{
                        ...state,
                        setMovies:action.payload,
                        setMoviesLoaded:true,
                    }
        default:
            return state;
    }
}

export default homeReducer;