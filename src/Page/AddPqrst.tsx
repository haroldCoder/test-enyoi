import {useState} from 'react'
import axios from 'axios';
import { API_URL } from '../configAPI';
import { toast } from 'react-toastify';

export default function AddPqrst() {
    const [nombre, setNombre] = useState<string>("");
    const [titulo, setTitulo] = useState<string>("");
    const [correo, setCorreo] = useState<string>("");
    const [descript, setDescript] = useState<string>("");
    const [IDE, setIde] = useState<number | any>();
    const [tipo, setTipo] = useState<string>("");
    const [Apellidos, setApellidos] = useState<string>("");
    const [numero, setNumero] = useState<number>();
    const [tel, setTel] = useState<number | any>();
    const [ticket, setTicket] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [state, setState] = useState<number>(0);

    const onChangeNombre = (e: any) =>{
        setNombre(e.target.value)
    }
    const onChangeTitulo = (e: any) =>{
        setTitulo(e.target.value)
    }
    const onChangeCorreo = (e: any) =>{
        setCorreo(e.target.value)
    }
    const onChangeDescript = (e: any) =>{
        setDescript(e.target.value)
    }
    const onChangeIde = (e: any) =>{
        setIde(e.target.value)
    }

    const onChangeTipo = (e: any) =>{
        setTipo(e.target.value)
    }

    const onChangeNumero = (e: any) =>{
        setNumero(e.target.value)
    }

    const onChangeTel = (e: any) =>{
        setTel(e.target.value)
    }

    const onChangeTicket = (e: any) =>{
        setTicket(e.target.value)
    }

    const onChangeApellido = (e: any) =>{
        setApellidos(e.target.value)
    }

    const onChangeContent = (e: any) =>{
        setContent(e.target.value)
    }

    const onChangeState = (e: any) =>{
        setState(e.target.value)
    }

    const SubmitPqrs = (e: any ) =>{
        e.preventDefault();

        axios.post(`${API_URL}apipqrs/type-documents`, {
              ide: IDE,
              tipo_doc: tipo,
              nombre: nombre,
              apellidos: Apellidos,
              numero: numero,
              tel: tel != null ? tel : 0,
              email: correo,
              titulo: titulo,
              ticket: ticket,
              content_ticket: content,
              estado: state == 1 ? "abierto" : "cerrado"
            }
        )
        .then((res: any)=>{
            console.log(res);
            toast.success(res.data)
        })
        .catch((err: any)=>{
            console.log(err.response.data);
            toast.error(err.response.data)
        })
        
    }

  return (
    <form action="" className='mt-8 px-24 xl:w-[80%] max-lg:w-[100%] max-lg:ml-[0%] max-md:px-10 ml-[10%]' onSubmit={SubmitPqrs}>
        <div className='grid xl:grid-cols-3 max-md:grid-cols-1 md:grid-cols-2 gap-10'>
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="nombre" value={nombre} onChange={onChangeNombre} />
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="apellidos" value={Apellidos} onChange={onChangeApellido} />
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="titulo de la pqrs" value={titulo} onChange={onChangeTitulo} />
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="correo electronico" value={correo} onChange={onChangeCorreo}/>
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="descripcion" value={descript} onChange={onChangeDescript} />
            <input type="number" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="Numero de identificacion" value={IDE} onChange={onChangeIde} />
            <select className='bg-gray-600 text-white border-green-500 p-1 rounded-sm' value={tipo} onChange={onChangeTipo}>
                <option value='C.C'>C.C</option>
                <option value='T.I'>T.I</option>
                <option value='C.E'>Cedula extranjera</option>
            </select>
            <input type="tel" maxLength={12} className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="numero de celular" value={numero} onChange={onChangeNumero} />
            <input type="tel" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="telefono fijo" value={tel} onChange={onChangeTel} />
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="ticket" value={ticket} onChange={onChangeTicket} />
            <input type="text" className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="contenido de la pqrs" value={content} onChange={onChangeContent} />
            <input type="number" max={1} className='bg-gray-600 text-white border-gren-500 p-1 rounded-sm' placeholder="estado de la pqrs(1:abierto o 0:cerrado)" value={state} onChange={onChangeState} />
        </div>
        <button className='bg-green-500 text-white p-3 rounded-md w-[100%] mt-10'>Enviar Pqrs</button>
    </form>
  )
}
