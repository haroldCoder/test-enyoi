import React, {Dispatch, SetStateAction} from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import tickets from '../assets/tickets.png'

interface PQRS{
    id: number,
    nombre: string,
    apellidos: string
    titulo: string,
    correo: string,
    descripcion: string,
    IDE: number,
    tipo_doc: string,
    numero: number,
    tel: number,
    ticket: string,
    content_ticket: string,
    estado: boolean,
    open: Dispatch<SetStateAction<boolean>>
}

export default function CardMain({id, nombre, titulo, correo, descripcion, IDE, tipo_doc, numero, tel, ticket, content_ticket, estado, open}: PQRS) {
  return (
    <div className='bg-gray-800 w-[100%] p-4 text-white h-[auto] rounded-lg'>
        <section className='flex border-b-[1px] p-2 border-gray-400'>
            <div className='title flex justify-center w-[50%]'>
                <div className='flex justify-around w-[100%]'>
                    <h2 className='text-green-500'>Nombre: {nombre}</h2>
                    <h2 className='text-green-500'>Identificacion: {IDE}</h2>
                </div>
            </div>
            <div className='flex justify-end w-[50%]' onClick={()=>open(false)}>
                <CancelIcon className='text-green-400 cursor-pointer' />
            </div>
        </section>
        <div className='panel mt-14'>
            <div className='flex justify-center'>
                <img src={tickets} alt="" />
            </div>
            <section className='content mt-10 grid grid-cols-3 gap-10'>
                <h2>ID: {id}</h2>
                <h2>Titulo: {titulo}</h2>
                <h2>Correo: {correo}</h2>
                <div>
                    <div>Descripcion de la pqrs</div>
                    <textarea readOnly className='text-gray-800 rounded-md p-1'>{descripcion}</textarea>
                </div>
                <h2>Tipo de documento: {tipo_doc}</h2>
                <h2>Numero movil: {numero}</h2>
                {tel != 0 || tel != null ? <h2>Telefono fijo: {tel}</h2> : null}
                <h2>Tipo de ticket: {ticket}</h2>
                <div>
                    <h2>Contenido de tickete</h2>
                    <textarea readOnly className='text-gray-800 rounded-md p-1'>{content_ticket}</textarea>
                </div>
                <h2>Estado: {estado}</h2>
            </section>
        </div>
    </div>
  )
}
