import React from 'react'

interface PQRS{
    nombre: string,
    titulo: string,
    correo: string,
    descripcion: string,
    IDE: number
}

export default function Card({nombre, titulo, correo, descripcion, IDE} : PQRS) {
  return (
    <>
        <div className='text-green-400'>{nombre}</div>
        <div className='text-green-400'>{titulo}</div>
        <div className='text-green-400'>{correo}</div>
        <div className='text-green-400'>{descripcion}</div>
        <div className='text-green-400'>{IDE}</div>
    </>
  )
}
