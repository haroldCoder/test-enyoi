import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [data, setData] = useState<[]>([]);

  useEffect(()=>{
    getPQRS();
  }, []);

  const getPQRS = async() =>{
    const res = (await axios.get('http://localhost:4000/apipqrs/pqrs')).data;
    setData(res);
  }

  return (
    <div className='flex justify-evenly'>
      {
        data.map((e: any)=>(
          <Card nombre={e.Nombre} titulo={e.Titulo} correo={e.Correo} descripcion={e.Content_ticket} IDE={e.IDE} />
        ))
      }

    </div>
  )
}
