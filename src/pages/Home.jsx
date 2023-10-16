import React, { useEffect } from 'react'
import Navbar from '../components/molecules/Navbar'
import Hero from '../components/atom/Hero/Hero'
import { useDispatch } from 'react-redux'
import Carousel from '../components/atom/Carousel/Carousel'
import { useSelector } from 'react-redux'
import { getGenres } from '../redux/action/homeAction'
import { getMovies } from '../redux/action/homeAction'

export default function Home() {
  const {genres,movies} = useSelector(state => state.homeReducer)
  const dispatch  = useDispatch();
  console.log(movies);
  useEffect(() => {
    dispatch(getGenres())
  }
  , []);
  useEffect(() => {
    dispatch(getMovies())
  }
  , []);
   

  return (
 <>
    <Navbar/>
    <Hero/>
    <Carousel/>
  
    {genres.map((item,index)=>{
      return(
        <h1 key={index}>{item.name}</h1>
      )
    })
    }

   </>
  )
}
