import React from 'react';
import ppblank from '../../../assets/ppblank.jpg';
import { useNavigate } from 'react-router-dom';

const CastCard = (props) => {
  const {name,character,profile_path,person_id} = props;
  const navigate = useNavigate();
 
   
  return (
    <div className="h-64 w-40 rounded overflow-hidden shadow-lg text-black"
   onClick={()=>navigate(`/detail-people/${person_id}`)}
    >
        {profile_path === null ? <img className="h-44 w-60"src={ppblank}/> : null
        }
        <img className="h-44 w-60"src={profile_path}/>
        <div className='mt-3'>
    <h1 className='font-bold text-center text-black'>{name}</h1>
    <p className='text-center text-black'>{character}</p>
        </div>
    </div>
  )
}

export default CastCard