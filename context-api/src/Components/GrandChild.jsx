import React,{useContext} from "react";
import {userContext} from "../App";
function GrandChild(){
    const user=useContext(userContext);
    return(
        <>
        <h1>Hello,{user}</h1>
        </>
    )
}

export default GrandChild;