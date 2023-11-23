import React from 'react'
import CastCard from '../atom/CastCard/CastCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gap from '../atom/Gap/Gap'
import DefaultProfile from '../../assets/ppblank.jpg'

const CastSection = ({data}) => {
     const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 4,
      arrows: false,
       responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
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
    <h1 className='font-bold text-xl text-black'>Top Billed Cast</h1>
    <Gap height={15}/>
    <Slider {...settings}>
    {data.map((credit)=>{
        return(
          <div className="cursor-pointer">
            <CastCard
            key={credit.id}
            name={credit.name}
            character={credit.character}
            profile_path={
              credit.profile_path !== null ?
              `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
            : DefaultProfile
            }
            />
          </div>
        )
    })}
    <div className=" h-64 w-40 rounded overflow-hidden shadow-lg">
    <h1 className='mt-32 mx-auto font-bold text-center text-xl'>View More</h1>
    </div>  
    </Slider>
    </>
  )
}

export default CastSection