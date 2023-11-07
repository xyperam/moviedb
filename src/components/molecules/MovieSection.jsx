import React from 'react'
import Card from '../atom/Card/Card'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function MovieSection({data,settings,titleSection}) {

  return (
        <>
        <h1>{titleSection}</h1>
       <Slider {...settings}>
    {data.map((item)=>{
      return(
        <div  className="cursor-pointer" >
          <Card
          key={item.id}
          id={item.id}
          title={item.title}
          vote_average={item.vote_average}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          />
        </div>
      )
    })
    }
    </Slider>
  </>
  )
}


export default MovieSection