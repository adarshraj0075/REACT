import {  createContext, useState } from "react"
//c-p-c
export const DataContext=createContext();

export function DataProvider({children}){
    const [state,setState]=useState({
        loading:false,
        error:null,
        data:null
    })

    async function fetchData(){
        setState({...state, loading:true});

        try {
            let resp=await fetch("https://jsonplaceholder.typicode.com/posts");
            let res=await resp.json();
            setState({...state,loading:false,data:res});
    
        } catch (error) {
            setState({
                ...state,
                loading:false,
                error:error.message,
                data:null,
            })
        }
    }
   
    return(
       <DataContext.Provider value={{state,fetchData}}>
        {children}
       </DataContext.Provider>
    )
}