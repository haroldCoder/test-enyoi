import React from 'react'
import coder from '../assets/coder-copia.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='bg-gray-700 items-center p-4 flex justify-between'>
        <div>
            <img src={coder} className='w-[4vw] h-[4vw] rounded-full' alt='coder' />
        </div>
        <div className='flex justify-around w-[20%]'>
            <Link to='/'><h2 className='text-white text-lg hover:text-green-500'>Home</h2></Link>
            <Link to='/addpqrs'><h2 className='text-white text-lg hover:text-green-500'>Añadir Pqrs</h2></Link>
            <a href="https://harold-enyoi.netlify.app/" className='text-white text-lg hover:text-green-500'>Portafolio</a>
        </div>
    </div>
  )
}
