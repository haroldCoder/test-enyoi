import coder from '../assets/coder-copia.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='bg-gray-700 items-center p-4 flex max-sm:flex-col justify-between'>
        <div>
            <img src={coder} className='w-[4vw] h-[4vw] rounded-full' alt='coder' />
        </div>
        <div className='flex justify-around w-[20%] max-md:mt-3 md:w-[40%] max-sm:flex-col max-md:w-full max-sm:content-center max-md:flex-wrap'>
            <Link to='/'><h2 className='text-white text-lg hover:text-green-500 max-md:text-center'>Home</h2></Link>
            <Link to='/addpqrs'><h2 className='text-white text-lg hover:text-green-500 max-md:text-center'>Añadir Pqrs</h2></Link>
            <a href="https://harold-enyoi.netlify.app/" className='text-white text-lg hover:text-green-500 max-md:text-center'>Portafolio</a>
        </div>
    </div>
  )
}
