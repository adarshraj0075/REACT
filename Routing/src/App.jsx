import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Contact } from './components/Contact'
import About from './components/About'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Users from './components/Users'
import LoginPage from './components/LoginPage'
import UnknownRoute from './components/UnknownRoute'


function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/abt' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='*' element={<UnknownRoute/>}/>
      </Routes>
      <button onClick={()=>{setCount(prev=>prev+1)}}>count</button>
      {count}
    </>
  )
}

export default App
