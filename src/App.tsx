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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addpqrs' element={<AddPqrst/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App
