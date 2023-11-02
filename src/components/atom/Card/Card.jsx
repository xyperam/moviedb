import React from 'react'
import Banner from '../../../assets/gb.jpg'
import CircleProgressBar from '../Circle/Circle';
const Card = (props) => {
    const {title,vote_average,image} = props;
    
  return (
    <div className='bg-red-500 w-64 h-96 rounded mx-4 my-6'>
        <img className='w-full h-full object-cover' src={image} alt='image' />
        <div className='relative top-[-30px] left-8 mb-[-20px]'>
        <p className=' text-white'>{vote_average}</p>
        </div>
        <p className='text-center'>{title}</p>
        </div>
  )
}

export default Card