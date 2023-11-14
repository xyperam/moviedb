import React from 'react';
import ppblank from '../../../assets/ppblank.jpg';


const CastCard = (props) => {
  const {name,character,profile_path} = props;
    return (
    <div className="h-64 w-40 rounded overflow-hidden shadow-lg">
        {profile_path === null ? <img className="h-44 w-60"src={ppblank}/> : null
        }
        <img className="h-44 w-60"src={profile_path}/>
        <div className='mt-3'>
    <h1 className='font-bold text-center'>{name}</h1>
    <p className='text-center'>{character}</p>
        </div>
    </div>
  )
}

export default CastCard