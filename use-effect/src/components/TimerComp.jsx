import { useEffect, useState } from "react"

function TimerComp(){
    let [seconds,setSeconds]=useState(0);
    let [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("timer started");
       let timer= setInterval(()=>{
            setSeconds((prev)=>prev+1);
         
        },1000)

        return function (){
                clearInterval(timer);
                console.log("timer stopped")
        }
        
        
    },[count])

    console.log(seconds);
  
    return(
        <>
         <h1>Time: {seconds}</h1>
         <h2>{count}</h2>
         <button onClick={()=>{setCount(prev=>prev+1)}}>count++</button>
        </>
    )
}

export {TimerComp};