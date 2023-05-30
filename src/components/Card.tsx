import {MouseEventHandler} from 'react'
import tickets from '../assets/tickets.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import {API_URL} from '../configAPI'

interface PQRS{
    id: number,
    nombre: string,
    titulo: string,
    correo: string,
    descripcion: string,
    IDE: number,
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function Card({id, nombre, titulo, correo, descripcion, IDE, onClick} : PQRS) {

  const DeletePqrs = async(id: any) =>{
    await axios.delete(API_URL+id)
    .then((res: any)=>{
      console.log(res);
      
    })
    .catch((err: any)=>{
      console.log(err);
      
    })
  }

  return (
    <>
    <div className='bg-slate-700 rounded-md mr-[5%] mb-12 w-[25%] cursor-pointer' onClick={onClick}>
      <div className='title flex p-2 justify-between bg-white'>
          <h2 className='text-green-600 font-semibold'>{nombre}</h2>
          <h2 className='text-green-600 font-semibold'>{IDE}</h2>
      </div>
      <div className='flex justify-center mt-10'>
        <img src={tickets} />
      </div>
      <div className='footer p-4 flex  justify-between'>
        <div className='text-white'>
          <h2>Correo: {correo}</h2>
          <h2>titulo: {titulo}</h2>
          <h2>descripcion: {descripcion}</h2>
        </div>
        <div className='flex cursor-pointer' onClick={()=>DeletePqrs(id)}>
            <DeleteForeverIcon style={{fontSize: '39px'}}/>
        </div>
      </div>
    </div>
    </>
  )
}
