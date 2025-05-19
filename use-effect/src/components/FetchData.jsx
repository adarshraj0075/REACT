import React, { useEffect, useState } from "react";

function FetchData(){
    let [data,setdata]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState("");

    useEffect(()=>{
        let fetchData=async ()=>{
            console.log("mountingg")
            setLoading(true);
           try {
             let resp=await fetch("https://jsonplaceholder.typicode.com/posts");
             let res=await resp.json();
             if(!resp.ok){
                throw new Error("failed to fetech...");
             }
             console.log(resp);
             setdata(res);
             console.log("getting res....");
           } catch (error) {
             console.error(error.message);
             setError(error.message);
           }
           
            finally{
                 console.log("setting it false");
                setLoading(false);
                console.log("it is set to false");
             }
            
           
        }

        // console.log("setting it false");
        //     setLoading(false);
        //     console.log("it is set to false");
         fetchData();
    },[])

   if(loading){
    return(
        <>
        <h1>loding...</h1>
        </>
    )
   }

   if(error){
    return(
        <>
        <h1>{error}</h1>
        </>
    )
   }

    //  let postElements = [];
    // data.slice(0, 5).forEach((element) => {
    //     postElements.push(<p key={element.id}>{element.title}</p>);
    // });
   
    return (
        <>
            <h1>Posts...</h1>
            {data.slice(0,5).map((ele,idx)=>(
                <p key={ele.id}>{idx+1}. {ele.title}</p>
            ))}
        </>
    );
}

export default FetchData;