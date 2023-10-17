import Axios from "axios";
import {BASE_URL,API_KEY,BASE_IMG_URL} from "../../utils/api";

export const getGenres = () => {
    return(dispatch)=>{
        Axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then((result)=>{
            const responseAPI= result.data.genres;
            console.log('data API :',responseAPI);
            dispatch({type:"GET_GENRES",payload:result.data.genres});
        }) .catch((err)=>{
            console.log('error :',err);
        })
    }
}
export const getMovies = () => {
    return(dispatch)=>{
        Axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`)
        .then((result)=>{
            const responseAPI= result.data.results;
            console.log('data API :',responseAPI);
            dispatch({type:"GET_MOVIES",payload:result.data.results});
        }) .catch((err)=>{
            console.log('error :',err);
        })
    }
}
