import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Unknown from './components/Unknown'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='*' element={<Unknown/>}/>
    </Routes>
    </>
  )
}

export default App
