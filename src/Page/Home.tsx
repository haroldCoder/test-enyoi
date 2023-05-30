import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const [data, setData] = useState<[]>([]);
  const [id, setID] = useState<number>();

  useEffect(()=>{
    if(id == null)
      getPQRS();
  });

  const getPQRS = async() =>{
    const res = (await axios.get('http://localhost:4000/apipqrs/pqrs')).data;
    setData(res);
    
  }

  const getPqrsById = async() =>{
    const res = (await axios.get('http://localhost:4000/apipqrs/pqrs/'+id)).data;
    setData(res);
  }

  return (
    <>
    <div className="flex justify-end my-5 mr-3 items-center">
        <div onClick={getPqrsById} className="cursor-pointer bg-white rounded-full hover:bg-green-300">
          <SearchIcon />
        </div>
        <input type="number" placeholder="search by ID" className="w-[20%] p-2 rounded-md" value={id} onChange={(e)=>setID(Number.parseInt(e.target.value))} />
      </div>
    <div className='flex justify-evenly p-4'>
      
      {
        data.map((e: any)=>(
          <Card id={e.ID} nombre={e.Nombre} titulo={e.Titulo} correo={e.Email} descripcion={e.Content_ticket} IDE={e.IDE} />
        ))
      }

    </div>
    </>
  )
}
