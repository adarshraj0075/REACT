function DecreaseCounter({setCounter,counter}){
    return(
        <>
        <button onClick={()=>{
            if(counter<1)return;
            setCounter(prev=>prev-1)
        
        }}>decrease</button>
        </>
    )
}

export default DecreaseCounter;