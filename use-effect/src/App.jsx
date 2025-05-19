import { useState,useEffect } from 'react';
import './App.css';
import DecreaseCount from './components/DecreaseCount';
import FetchData from './components/FetchData';
import { TimerComp } from './components/TimerComp';

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("Adarsh");
  const [show,setShow]=useState(false);

  function changeName(){
   if(name=="Adarsh"){
    setName(prev=>"Raj");
   }else{
    setName(prev=>"Adarsh");
   }
  }
 // three phase of react life cycle 
 //1.mounting
 //2.updating
 //3.unmounting

 //useEffect runs as soon as the compnent in which use effect is present
 //is mounted/rendered or updated/rerendered for the first time
 //for ex=> whenever i referesh the page useEffect will run or trigger
 //or whenever i increase count then also the useEffect will trigger or run
 //because when i click on button the component will rerender or update its 
 //state so the use effect will trigger

 //useEffect take two parameter 1st is a callback 2nd is dependency array[];

 //the 2nd parameter which is dependency array if we keep that array empty
 // that means useEffect is not dependent on any state or props so it will run or
 //trigger only once while component mounting phase

 useEffect(()=>{
  console.log("component mounted or updated");
 },[])

  return (
    <>
     <h1>count: {count}</h1>
     <h1>Name: {name}</h1>
     <button onClick={()=>setCount((prev)=>prev+1)}>increaseCount</button>
     <DecreaseCount setCounter={setCount} count={count}/>
     <button onClick={changeName}>ChangeName</button>
     <FetchData/>
     
     {show && <TimerComp/>}
     <button onClick={
      ()=>{
        if(show){
          setShow(prev=>false)
        }else{
          setShow(prev=>true);
        }
      }
     }>mount timerComp</button>
    </>
  )
}

export default App
