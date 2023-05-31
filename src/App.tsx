import './App.css'
import AddPqrst from './Page/AddPqrst'
import Home from './Page/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter> {/* usamos el browse router para crear el enrutamiento de la web */}
      <Navbar /> {/* Navegacion */}
      <div className="container max-md:min-h-screen max-md:pb-10 mb-10">
        <Routes>
            <Route path='/' element={<Home/>} /> {/* en la ruta principal usamos el componente Home */}
            <Route path='/addpqrs' element={<AddPqrst/>} /> {/* en la ruta para añadir un nuevo pqrs usamos el componente AddPqrst */}
        </Routes>
      </div>
      <Footer /> {/* Footer */}
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App
