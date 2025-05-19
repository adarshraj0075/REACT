function IncreaseCounter({setCounter}){
    return(
        <>
        <button onClick={()=>setCounter((prev)=>prev+1)}>increase</button>
        </>
    )
}

export default IncreaseCounter;