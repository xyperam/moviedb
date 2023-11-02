import React from 'react'
import  { useEffect,useState } from 'react'
import Navbar from '../components/molecules/Navbar'
import Hero from '../components/atom/Hero/Hero'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getGenres,getPopularMovies,searchMovies } from '../redux/action/homeAction'
import { getMovies } from '../redux/action/homeAction'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/atom/Card/Card'
import SearchResult from '../components/molecules/SearchResult'
import MovieSection from '../components/molecules/MovieSection'


export default function Home() {
  const {genres,movies,popularmovies,setMovies} = useSelector(state => state.homeReducer)
  const dispatch  = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    dispatch(getGenres())
    dispatch(getMovies())
    dispatch(getPopularMovies())
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
  };

  return (
 <>
    <Navbar />
    <Hero handleSearch={handleSearch}/>
    {isSearching ?(
       <SearchResult data={setMovies}/>
    ):(
  <div className='container mx-auto mt-3'>
      <MovieSection data={movies} settings={settings}/>
      <MovieSection data={popularmovies} settings={settings}/>
  </div>
  
    )}
  
     
   </>
  )
}
