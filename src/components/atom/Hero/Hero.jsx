import React from 'react'
import Banner from '../../../assets/gb.jpg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../../redux/action/homeAction';
import { useState } from 'react';

const Hero = () => {
const dispatch = useDispatch();
const setMovies = useSelector(state => state.homeReducer.setMovies)
const setMoviesLoaded = useSelector(state => state.homeReducer.setMoviesLoaded)
const [query,setQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchMovies(query));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <section>
    <div className='container mx-auto mt-2 relative h-96'>
    <div className='container mx-auto absolute w-full'>
      <img className='h-96 w-full object-cover' src={Banner} alt="Banner" />
     </div>
     <div className='relative text-white' >
      <div className='px-10 pt-32 text-xl'>
       <h1 className='' >Welcome.</h1>
       <h2>Explore Movies and TV Show Now.</h2> 
      </div>
 <div className='relative mt-4 px-8 flex w-full flex-wrap items-stretch'>
        <input className='px-3 py-1 relative block w[1-px]  flex-auto rounded-full -mr-1 border ' 
        type="text" placeholder="Search for a movie or TV show"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        />
        <button 
        onClick={handleSearch}
        className='relative z-[3] rounded-full border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0'>Search</button>
      </div>
      </div>
      </div>      
  </section>
  )
}

export default Hero