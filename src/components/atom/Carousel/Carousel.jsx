import React from 'react'
import Banner from '../../../assets/gb.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel (){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
  };
  return (
    <div className='container mx-auto mt-3'>
<div >
        <Slider {...settings}>
        <div className="">
          <Card/>
        </div>
        <div className="">
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
          <Card/>
        </div>
        <div>
         <Card/>
        </div>
        </Slider>
    </div>
        
    </div>

  )
}

const Card = () => {
    return (
        <div className='bg-red-500 w-64 h-72 rounded'>
        <img className='w-full h-full object-cover' src={Banner} alt='image' />
        <p className='text-center'>title</p>
        </div>
    )
    }

export default Carousel
