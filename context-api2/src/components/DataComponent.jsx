import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

function DataComponent(){
    const{state,fetchData}=useContext(DataContext);
    useEffect(()=>{
        fetchData();
       
    },[])

    console.log(state);
    
    return(
        <>
            {state.loading && <p>loading...</p>} 
            {/*state.data&&<h1>{state.data[0].title}</h1>*/}
            {state.data && state.data.slice(0,5).map((ele,idx)=>
            <h1 key={ele.id}>{idx+1} . {ele.title}</h1>   
            )}
            
            {state.error&& <h1>{state.error}</h1>}

        </>
    )
}

export {DataComponent};