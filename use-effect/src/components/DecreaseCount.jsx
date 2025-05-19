function DecreaseCount({setCounter,count}){
    return(
        <>
        <button onClick={()=>{
            if(count<1) return;
            setCounter((prev)=>prev-1)
              
        }}

        disabled={count<1}
        
        >DecreaseCount</button>
        </>
    )
}

export default DecreaseCount