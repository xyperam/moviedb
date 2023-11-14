import React from 'react'
import  { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Hero from '../components/atom/Hero/Hero'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getGenres,getPopularMovies,searchMovies,getTrendingMovies,getNowPlayingMovies} from '../redux/action/homeAction'
import { getMovies } from '../redux/action/homeAction'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/atom/Card/Card'
import SearchResult from '../components/molecules/SearchResult'
import MovieSection from '../components/molecules/MovieSection'
import Gap from '../components/atom/Gap/Gap'


export default function Home() {
  const {genres,movies,popularmovies,trendingMovies,nowPlayingMovies,setMovies} = useSelector(state => state.homeReducer)
  const dispatch  = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    dispatch(getGenres())
    dispatch(getMovies())
    dispatch(getPopularMovies())
    dispatch(getTrendingMovies())
    dispatch(getNowPlayingMovies())
  }
  , []);

  const handleSearch = (query) => {
    dispatch(searchMovies(query));
    setIsSearching(true);
  }
  
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      display: isSearching ? 'none' : 'block',
      arrows: false,
       responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  };

  return (
 <>
    <Navbar />
    <Hero handleSearch={handleSearch}/>
    {isSearching ? (
      <SearchResult data={setMovies} />
    ) : (
      <div className='container mx-auto mt-3 '>
        <Gap height={10}/>
        <MovieSection data={nowPlayingMovies} settings={settings} titleSection='Now Playing' />
        <Gap height={10}/>
        <MovieSection data={trendingMovies} settings={settings} titleSection='Trending Now' />
        <Gap height={10}/>
        <MovieSection data={popularmovies} settings={settings} titleSection='Popular'/>
      </div>
    )}
  
     
   </>
  )
}
