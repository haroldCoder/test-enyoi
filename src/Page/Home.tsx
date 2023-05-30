import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchIcon from '@mui/icons-material/Search';
import CardMain from "../components/CardMain";
import { API_URL } from "../configAPI";

export default function Home() {
  const [data, setData] = useState<[]>([]);
  const [id, setID] = useState<number>();
  const [openCard, setOpenCard] = useState(false);
  const [pqr, setPqr] = useState<[]>([]);

  useEffect(()=>{
    if(id == null)
      getPQRS();
    if(openCard){
      getPqr();
    }
  });

  const getPQRS = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs`)).data;
    setData(res);
    
  }

  const getPqrsById = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs/${id}`)).data;
    setData(res);
  }

  const getPqr = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs/${id}`)).data;
    setPqr(res);
  }

  return (
    <>
    <div className="flex justify-end my-10 mr-6 items-center">
        <div onClick={getPqrsById} className="cursor-pointer bg-white rounded-full hover:bg-green-300">
          <SearchIcon />
        </div>
        <input type="number" placeholder="search by ID" className="w-[20%] p-2 ml-2 rounded-md" value={id} onChange={(e)=>setID(Number.parseInt(e.target.value))} />
      </div>
    <div className='flex justify-evenly flex-wrap p-4'>
      
      {
        data.map((e: any)=>(
          <Card onClick={()=>{setOpenCard(true), setID(e.ID)}} id={e.ID}  nombre={e.Nombre} titulo={e.Titulo} correo={e.Email} descripcion={e.Content_ticket} IDE={e.IDE} />
        ))
      }
    </div>
    {
      openCard ?
      <div className="absolute top-[15%] left-[20%] w-[60%]">
        {
          pqr.map((e: any)=>(
            <CardMain 
              open={setOpenCard}
              id={e.ID}
              nombre={e.Nombre} 
              titulo={e.Titulo} 
              correo={e.Email} 
              descripcion={e.Content_ticket}
              IDE={e.IDE}
              tipo_doc={e.Tipo}
              apellidos={e.Apellidos}
              tel={e.Tel}
              numero={e.Numero}
              ticket={e.Ticket}
              content_ticket={e.Content_ticket}
              estado={e.Estado}
            />
          ))
        } 
      </div>
      : null
    }
    </>
  )
}
