import React from 'react'
import Banner from '../../../assets/gb.jpg'
import CircleProgressBar from '../Circle/Circle';
import Gap from '../Gap/Gap';
import { useNavigate } from 'react-router-dom';
const Card = (props) => {
    const {title,vote_average,image,id} = props;
        const handleHover = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.transition = 'transform 0.5s';
    };

    const handleHoverExit = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };
    
    const navigate = useNavigate();
  return (
    <div className='md:w-64 md:h-96 rounded mx-4 my-6 sm:w-32 sm:h-60'>
        <img className='w-full h-full object-cover' src={image} alt='image'
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
           onClick={()=>navigate(`/detail-movie/${id}`)}
         />
        <div className='relative top-[-30px] left-8 mb-[-20px]'>
        <p className=' text-white'>{vote_average.toFixed(2)}</p>
        </div>
        <Gap height={10}/>
        <p className='text-center'>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</p>
        </div>
  )
}

export default Card