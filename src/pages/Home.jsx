import React, { useEffect } from 'react'
import Navbar from '../components/molecules/Navbar'
import Hero from '../components/atom/Hero/Hero'
import { useDispatch } from 'react-redux'
import Carousel from '../components/atom/Carousel/Carousel'
import { useSelector } from 'react-redux'
import { getGenres } from '../redux/action/homeAction'
import { getMovies } from '../redux/action/homeAction'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/atom/Card/Card'
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
   
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
  };

  return (
 <>
    <Navbar/>
    <Hero/>
  <div className='container mx-auto mt-3'>
    <Slider {...settings}>
    {movies.map((item)=>{
      return(
        <div  className="">
          <Card
          key={item.id}
          id={item.id}
          original_title={item.original_title}
          vote_average={item.vote_average}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          
          />
        </div>
      )
    })
    }
    </Slider>
  </div>
  
    {genres.map((item,index)=>{
      return(
        <h1 key={index}>{item.name}</h1>
      )
    })
    }

   </>
  )
}
