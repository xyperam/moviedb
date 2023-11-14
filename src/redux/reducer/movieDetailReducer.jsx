const initialState = {
    movie: [],
    movieLoaded: false,
    genres: [],
    genresLoaded: false,
    credits: [],
    creditsLoaded: false,

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
        default:
            return state;
    }
}