import { use } from "react"
import { useState } from "react"
export function Header(){
    const [count,setCount]=useState(0);
    // let increaseCount=()=>{
    //     setCount((prev)=>{
    //         return prev+1;
    //     })
    // }

    function CounterBtn({Btnname,onClick}){ 
        return(
            <>
            <button onClick={onClick}>{Btnname}</button>
            </>
        )
    }

    function increaseCount(){
        setCount((prev)=>{
            return prev+1;
        })
    }

    function decreaseCount(){
        setCount((prev)=>{
            if(prev<1) return 0;
            return prev-1;
        })
    }

    return(
        <>
         <h1>Hello React</h1>
         <h3>{count}</h3>
     
         <CounterBtn Btnname="count++" onClick={increaseCount}/>
         <CounterBtn Btnname="count--" onClick={decreaseCount}/>
        </>
    )
}

//export default Header; // Export the Header Component