import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const navigate=useNavigate();
    const handelLogin=()=>{
        navigate("/");
        alert("user logged");
    }
    return(
        <>
        <h1>Login page</h1>
        <button onClick={handelLogin}>Login</button>
        </>
    )
}

export default LoginPage;