import './App.css'
import AddPqrst from './Page/AddPqrst'
import Home from './Page/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addpqrs' element={<AddPqrst/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
