import React, {useState} from 'react'
import axios from 'axios';

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
    const [state, setState] = useState<number>();

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

        axios.post('http://localhost:4000/apipqrs/type-documents', {
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
              estado: state
            }
        )
        .then((res: any)=>{
            console.log(res);
            
            
        })
        .catch((err: any)=>{
            console.log(err);
            
        })
    }

  return (
    <form action="" className='grid grid-cols-1 space-y-4 px-24 w-[50%] mt-3 ml-[20%]' onSubmit={SubmitPqrs}>
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="nombre" value={nombre} onChange={onChangeNombre} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="apellidos" value={Apellidos} onChange={onChangeApellido} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="titulo" value={titulo} onChange={onChangeTitulo} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="correo" value={correo} onChange={onChangeCorreo}/>
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="descripcion" value={descript} onChange={onChangeDescript} />
        <input type="number" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="IDE" value={IDE} onChange={onChangeIde} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="tipo" value={tipo} onChange={onChangeTipo} />
        <input type="number" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="numero" value={numero} onChange={onChangeNumero} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="tel" value={tel} onChange={onChangeTel} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="ticket" value={ticket} onChange={onChangeTicket} />
        <input type="text" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="content" value={content} onChange={onChangeContent} />
        <input type="number" className='bg-gray-600 text-white border-2 border-gren-500 p-1 rounded-sm' placeholder="state" value={state} onChange={onChangeState} />

        <button className='bg-green-500 text-white p-3 rounded-md'>Enviar Pqrs</button>
    </form>
  )
}
