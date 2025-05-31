import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const navigate=useNavigate();
    const handelLogin=()=>{
        navigate('/home');
        alert("Login Sucess");
    }
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={handelLogin}>Login</button>
        </>
    )
}

export default LoginPage;