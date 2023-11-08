import React, { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { API_KEY } from '../utils/api'
import Gap from '../components/atom/Gap/Gap'

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
    <>
      <Navbar/>
      <section>
      <div className='relative'>
      <div className='absolute w-full'
      style={{ top: 0, bottom: 0 }}
      >
        <img className='object-cover blur-[4px]'
        style={{ width: '100%', height: '100%' }}
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
      </div>
      <div
    className='absolute top-0 left-0 w-full h-full'
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    </div>
      <div className='container mx-auto relative '>
      <div className='flex flex-col md:flex-row bg-red items-center'>
        <div className='py-10'>
      <img className='h-96 max-w-2xl md:max-h-full' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
      <div className='flex  flex-col justify-center text-white px-10 '>
        <div className='flex md:flex-row flex-wrap items-center lg:justify-start sm:justify-center '>
      <h1 className='font-bold text-5xl md:text-center'>{movie.title} </h1>
      <h1 className='mx-2 text-4xl md:text-center '>({new Date(movie.release_date).getFullYear()})</h1>
        </div>
      <div className=''>
        <p>
        {genres.map((genre, index) => (
          <span key={genre.id}>
            {genre.name}
            {index < genres.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <Gap height={10}/>
      <h1 className='text-4xl font-bold'>Overview</h1>
      <Gap height={3}/>
      <p>{movie.overview}</p>
      </div>
      </div>
      </div>
       </div>
       </div>
       </section>
    </>
      )
}

export default DetailMovie