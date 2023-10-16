import React from 'react';
import { FaPowerOff } from "react-icons/fa";
import { NavLink,useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../../utils/firebase-config';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged} from 'firebase/auth';
function Navbar() {
   const navigate = useNavigate();
    
//    onAuthStateChanged(firebaseAuth, (currentUser) => {
//     if (!currentUser) navigate("/login");
//   }
//   );

    const NavLinks=()=>{
    return(
        <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>TV Shows</NavLink>
        <NavLink to='/'>MyList</NavLink>
        <NavLink to='/'>Movies</NavLink>
        </>
    )
    }
  return (
    <nav className='w-full bg-black text-white'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex items-center mb-4 md:mb-0' href="#">Logo</a>
        <div className='md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-8'>
            <NavLinks/>  
        </div>
            <button 
            onClick={() => signOut(firebaseAuth)}
            className='text-red-500'>
                <FaPowerOff/>
            </button>
        </div>
        </nav>
  )
}

export default Navbar;
