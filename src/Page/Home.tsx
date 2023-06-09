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
  const [pqr, setPqr] = useState<[]>([]); {/* creamos controladores para maneja la applicacion */}
  const [check, setCheck] = useState<boolean>(false)
  const [ArrayIds, setArrayIds] = useState<number[]>([]);

  useEffect(()=>{
    if(id == null)
      getPQRS(); {/* si el id es null, ahi si se llama todos los pqrs */}
    if(openCard){
      getPqr(); {/* si la openCard es true se llamara al getPqr */}
    }
  });

  useEffect(()=>{
    console.log(ArrayIds);
    
  }, [ArrayIds])

  const getPQRS = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs`)).data; {/* peticion a la api para traer todos los datos */}
    setData(res);
    
  }

  const getPqrsById = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs/${id}`)).data; {/* por medio de la id, traer un dato en especifico */}
    setData(res)
  }

  const getPqr = async() =>{
    const res = (await axios.get(`${API_URL}apipqrs/pqrs/${id}`)).data;
    setPqr(res);
  }

  const EliminarPqrs = async() =>{
    console.log(ArrayIds);
    
      await axios.delete(`${API_URL}apipqrs/pqrs/deleteIds`, {data: {"array": ArrayIds}})
      .then((res: any) =>{
        console.log(res);
      })
      .catch((err: any)=>{
        console.log(err);
        
      })
  }

  return (
    <>
    <div className="flex justify-between max-lg:flex-col p-4 items-center">
      <button onClick={()=>setCheck(true)} className="bg-white text-green-600 h-16 max-lg:w-[100%] lg:w-[20%] rounded-md p-2 font-semibold">Seleccionar varios</button>
      <button onClick={EliminarPqrs} className="bg-red-600 max-lg:mt-4 text-white py-3 px-7 rounded-md ml-8">Eliminar</button>
      <div className="flex justify-end my-10 mr-6 items-center w-[100%] p-3">
            {/* motor de busqueda el cual hace uso de la funcion para llamar dato por id especifico */}
        <div onClick={getPqrsById} className="cursor-pointer bg-white rounded-full hover:bg-green-300"> 
          <SearchIcon />
        </div>
        <input type="number" placeholder="search by ID" className="w-[20%] max-md:w-full p-2 ml-2 rounded-md" value={id} onChange={(e)=>setID(Number.parseInt(e.target.value))} />
      </div>
    </div>
    <div className='flex justify-evenly flex-wrap p-4 max-md:flex-col'>
      
      {
        data.map((e: any)=>( 
          <Card onClick={()=>{setOpenCard(true) /* si se le da click a la card, el openCard pasa a ser true, para que se despliegue la ventana emergente*/ , 
          setID(e.ID)}} id={e.ID}  nombre={e.Nombre} titulo={e.Titulo} correo={e.Email} descripcion={e.Content_ticket} IDE={e.IDE} check={check} ArrayIds={setArrayIds} />
          ))
      }
    </div>
    {
      openCard ? 
      <div className="absolute top-[15%] max-md:top-[0%] max-md:left-[0%] left-[20%] max-md:w-[100%] w-[60%]"> {/* si el openCard es true, va a generar la ventana emergente */}
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
