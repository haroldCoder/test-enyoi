import {Dispatch, MouseEventHandler, SetStateAction} from 'react'
import tickets from '../assets/tickets.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import {API_URL} from '../configAPI'
import {toast} from 'react-toastify';

interface PQRS{
    id: number,
    nombre: string,
    titulo: string,
    correo: string,
    descripcion: string,
    IDE: number,
    onClick: MouseEventHandler<HTMLDivElement>,
    check: boolean,
    ArrayIds: Dispatch<SetStateAction<number[]>>
} //interface para saber que datos ira en las props

export default function Card({id, nombre, titulo, correo, descripcion, IDE, onClick, check, ArrayIds} : PQRS) { //la card hace uso de las props para traer datos, desde donde se quiera añadir una nueva targeta

  const DeletePqrs = async(id: any) =>{
    await axios.delete(`${API_URL}apipqrs/pqrs/${id}`)
    .then((res: any)=>{
      console.log(res);
      toast.success(res.data)
    })
    .catch((err: any)=>{
      console.log(err);
      toast.error(err.response.data)
    })
  }

  const Añadir = () =>{
    ArrayIds(prevIds => [...prevIds, id]);
    
  }

  return (
    <>
    <div className='bg-slate-700 rounded-md mr-[5%] mb-12 xl:w-[25%] max-md:w-[100%] md:w-[40%] cursor-pointer' onClick={onClick}>
      <div className='title flex p-2 justify-between bg-white'>
          <h2 className='text-green-600 font-semibold'>{nombre}</h2>
          <h2 className='text-green-600 font-semibold'>{IDE}</h2>
      </div>
      <div className='flex justify-center mt-10'>
        <img src={tickets} />
      </div>
      <div className='p-4 flex  justify-between'>
        <div className='text-white'>
          <h2>Correo: {correo}</h2>
          <h2>titulo: {titulo}</h2>
          <h2>descripcion: {descripcion}</h2>
        </div>
        <div className='flex cursor-pointer' onClick={(e) => {
          e.stopPropagation();
          DeletePqrs(id);
        }}>
            <DeleteForeverIcon style={{fontSize: '39px'}}/>
        </div>
      </div>
      <div className='px-3 py-3'>
        {
          check ?
          <input onClick={(e)=>e.stopPropagation()} onChange={(e)=>{e.target.checked == true ? Añadir() : null}} className='w-6 h-6 cursor-pointer'  type="checkbox" />
          :null
        }
        
      </div>
    </div>
    </>
  )
}
