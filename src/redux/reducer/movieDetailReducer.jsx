const initialState = {
    movie: [],
    movieLoaded: false,
    genres: [],
    genresLoaded: false,
    credits: [],
    creditsLoaded: false,
    backdrop: [],
    backdropLoaded: false,
    poster: [],
    posterLoaded: false,
};

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movie: action.payload,
                movieLoaded: true,
            }
        case "GET_GENRES":
            return {
                ...state,
                genres: action.payload,
                genresLoaded: true,
            }
        case "GET_CREDITS":
            return {
                ...state,
                credits: action.payload,
                creditsLoaded: true,
            }
        case "GET_BACKDROP":
            return {
                ...state,
                backdrop: action.payload,
                backdropLoaded: true,
            }
        case "GET_POSTER":
            return {
                ...state,
                poster: action.payload,
                posterLoaded: true,
            }
        
        default:
            return state;
    }
}