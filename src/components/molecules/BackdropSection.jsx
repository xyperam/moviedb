import React from 'react'
import CastCard from '../atom/CastCard/CastCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gap from '../atom/Gap/Gap'
import { SwitchButton } from '../atom';

const BackdropSection = ({data}) => {
     const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 5,
      arrows: false,
       responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
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
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
  };
  return (
    <>
    <Gap height={15}/>
    <Slider {...settings}>
    {data.map((images)=>{
        return(
        <img 
        key={images.id}
        className="h-90 w-10" src={`https://image.tmdb.org/t/p/w500/${images.file_path}`}/>
        )
    })}
    </Slider>
    </>
  )
}

export default BackdropSection