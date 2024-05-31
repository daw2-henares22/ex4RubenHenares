import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './views/Login'
import { Registre } from './views/Registre'
import { Panell } from './views/Panell'
import { Header } from './components/Header'

export default function App() {

  return (
    <>
      <div className='container mt-5'>
        <Header/>
        <Routes>
          <Route path='/' element={<Panell/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registre' element={<Registre/>}/>
        </Routes>
      </div>
    </>
  )
}