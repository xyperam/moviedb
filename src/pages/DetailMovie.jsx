import React, { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { API_KEY } from '../utils/api'
import Gap from '../components/atom/Gap/Gap'
import CastCard from '../components/atom/CastCard/CastCard'
import CastSection from '../components/molecules/CastSection'
import PosterSection from '../components/molecules/PosterSection'
import { SwitchButton } from '../components/atom'
import BackdropSection from '../components/molecules/BackdropSection'

function DetailMovie() {
  const params = useParams();
  const dispatch = useDispatch();
  const [movie,setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits,setCredits] = useState([]);
  const [images,setImages] = useState([]);
  const [isPoster, setIsPoster] = useState(true); 
  const [backdrop, setBackdrop] = useState([]);
  useEffect(() => {
    
    dispatch(fetchBackdrops());
    dispatch(fetchMovieDetail());
    dispatch(fetchCredits());
    dispatch(fetchPosters());
  }, [params.id]);

      const handleSwitch = () => {
    setIsPoster(!isPoster);
  };

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
        <div className='flex md:flex-row flex-wrap items-center lg:justify-start sm:justify-center md:justify-start '>
      <h1 className='font-bold text-5xl md:text-center'>{movie.title} </h1>
      <h1 className='mx-2 text-4xl md:text-center '>({new Date(movie.release_date).getFullYear()})</h1>
        </div>
      <div className=''>
        <p className='sm:text-center md:text-left'>
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
      <p className='text-justify'>{movie.overview}</p>
      </div>
      </div>
      </div>
       </div>
       </div>
       </section>
        <Gap height={10}/>
      <section className='container mx-auto'>
        <CastSection data={credits}/>
        <Gap height={15}/>
         <SwitchButton isChecked={isPoster} onToggle={handleSwitch} />
        
        {isPoster?
        (
          <PosterSection data={images} />
        ) : (
          <BackdropSection data={backdrop} />
        )}
        
        </section>
    </>
      )
}

export default DetailMovie