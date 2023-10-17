import React from 'react'
import Banner from '../../../assets/gb.jpg'
const Card = (props) => {
    const {original_title,vote_average,image} = props;
  return (
    <div className='bg-red-500 w-64 h-72 rounded'>
        <img className='w-full h-full object-cover' src={image} alt='image' />
        <p className='text-center'>{original_title}</p>
        <p className='text-center'>{vote_average}</p>
        </div>
  )
}

export default Card