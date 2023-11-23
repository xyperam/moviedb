import React, { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { API_KEY } from '../utils/api'
import Gap from '../components/atom/Gap/Gap'
import CastSection from '../components/molecules/CastSection'
import PosterSection from '../components/molecules/PosterSection'
import DetailMovieSection from '../components/molecules/DetailMovieSection'
import SwitchButton from '../components/atom/SwitchButton/SwitchButton'
import BackdropSection from '../components/molecules/BackdropSection'
function DetailMovie() {
  const params = useParams();
  const [movie,setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits,setCredits] = useState([]);
  const [images,setImages] = useState([]);
  const [isPoster, setIsPoster] = useState(true); 
  const [backdrop, setBackdrop] = useState([]);

     const handleSwitch = () => {
    setIsPoster(!isPoster);
  };

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
    
    const fetchCredits = async () => {
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

    const fetchPosters = async () => {
      try {
        const response = await Axios.get(
           `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`
        );
        setImages(response.data.posters.slice(0, 10));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchBackdrops = async () => {
      try {
        const response = await Axios.get(
           `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`
        );
        setBackdrop(response.data.backdrops.slice(0, 10));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetail();
    fetchCredits();
    fetchPosters();
    fetchBackdrops();
  }, [params.id]);


  return (
    <>
      <Navbar/>
      <DetailMovieSection movie={movie} genres={genres}/>
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