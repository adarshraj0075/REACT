import { useState } from 'react'
import {Header} from './components/Header';
import './App.css'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { Middle } from './components/middle';
import { Counter } from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';


function App() {
   let [msg,setMsg]=useState("Hello From app");
   let [counter,setCounter]=useState(0);

  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    <h2 className='propDrill'>This is the starting of prop drilling example</h2>
    <h1>I am parent comp</h1>
    <Middle msg={msg}/>
    ll
    <Counter counter={counter}/>
    <IncreaseCounter setCounter={setCounter}/>
    <DecreaseCounter setCounter={setCounter} counter={counter}/>
    </>
  )
}

export default App
