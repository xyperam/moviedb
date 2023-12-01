import Axios from "axios";
import {BASE_URL,API_KEY,BASE_IMG_URL} from "../../utils/api";

export const fetchMovieDetail = async () => {
  return (dispatch) => {
    Axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
    .then((result)=>{
      const responseAPI= result.data;
      console.log('data API :',responseAPI);
        setMovie(response.data)
        const genreIds = response.data.genres.map((genre) => genre.id);
        fetchGenres(genreIds);
      dispatch({type:"GET_MOVIE_DETAIL",payload:result.data});
    })
    .catch((err)=>{
      console.log('error :',err);
    })
  }
};
  export  const fetchGenres = async (genreIds) => {
    return(dispatch)=>{
      Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((result)=>{
        const responseAPI= result.data.genres;
        console.log('data API :',responseAPI);
        dispatch({type:"GET_GENRES",payload:result.data.genres});
         const genresData = response.data.genres.filter((genre) =>
          genreIds.includes(genre.id)
        );
        setGenres(genresData);
      })
      .catch((err)=>{
        console.log('error :',err);
      })
    }
  };
    
    
  export const fetchCredits = async () => {
      return (dispatch) => {
        Axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}&language=en-US`
        )
        .then((result)=>{
          const responseAPI= result.data.cast;
          console.log('data API :',responseAPI);
          dispatch({type:"GET_CREDITS",payload:result.data.cast});
          setCredits(response.data.cast.slice(0, 10));
        }
        )
        .catch((err)=>{
          console.log('error :',err);
        }
        )
      }
    }
    

  export const fetchPosters = async () => {
      return (dispatch) => {
        Axios.get(
           `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`
        )
        .then((result)=>{
          const responseAPI= result.data.posters;
          console.log('data API :',responseAPI);
          dispatch({type:"GET_POSTER",payload:result.data.posters});
          setImages(response.data.posters.slice(0, 10));
        }
        )
        .catch((err)=>{
          console.log('error :',err);
        }
        )
      }
    }
  
  export const fetchBackdrops = async () => {
       return (dispatch) => {
          Axios.get(
              `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null&type=backdrop`
            )
            .then((result)=>{
              const responseAPI= result.data.backdrops;
              console.log('data API :',responseAPI);
              dispatch({type:"GET_BACKDROP",payload:result.data.backdrops});
              setBackdrop(response.data.backdrops.slice(0, 10));
            }
            )
            .catch((err)=>{
              console.log('error :',err);
            }
            )
          }
        }