const initialState={
    movies:[],
    genresLoaded: false,
    genres:[],
    moviesLoaded:false,
    popularmovies:[],
    popularmoviesLoaded:false,
    setMovies:[],
    setMoviesLoaded:false,
    trendingMovies:[],
    trendingMoviesLoaded:false,
    nowPlayingMovies:[],
    nowPlayingMoviesLoaded:false,

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
                    case "GET_TRENDING_MOVIES":
                        return{
                            ...state,
                            trendingMovies:action.payload,
                            trendingMoviesLoaded:true,
                        }
                        case "GET_NOW_PLAYING_MOVIES":
                            return{
                            ...state,
                            nowPlayingMovies:action.payload,
                            nowPlayingMoviesLoaded:true,
                            }
        default:
            return state;
    }
}

export default homeReducer;