import React, { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { API_KEY } from '../utils/api'

function DetailMovie() {
  const params = useParams();
  const [movie,setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchMovieDetail = async () => {
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
    const fetchGenres = async (genreIds) => {
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
    fetchMovieDetail();
  }, [params.id]);



  return (
    <div>
      <Navbar/> 
      <h1>Detail</h1>
     <p>{movie.title}</p>
      <p>{movie.overview}</p>
        <p>
        Genres:
        {genres.map((genre, index) => (
          <span key={genre.id}>
            {genre.name}
            {index < genres.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
      )
}

export default DetailMovie