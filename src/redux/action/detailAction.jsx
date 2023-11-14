import Axios from "axios";
import {BASE_URL,API_KEY,BASE_IMG_URL} from "../../utils/api";

export const fetchMovieDetail = async () => {
      try{
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
        setMovie(response.data)
        const genreIds = response.data.genres.map((genre) => genre.id);
        fetchGenres(genreIds);
      }
      catch(error){
        console.log(error)
      }
    };
  export  const fetchGenres = async (genreIds) => {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const genresData = response.data.genres.filter((genre) =>
          genreIds.includes(genre.id)
        );
        setGenres(genresData);
      } catch (error) {
        console.log(error);
      }
    };
    
  export const fetchCredits = async () => {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCredits(response.data.cast.slice(0, 10));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }