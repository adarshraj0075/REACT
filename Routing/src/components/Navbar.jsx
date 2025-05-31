import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <>
            <nav>
                <Link to="/home">home</Link>
                <Link to="/abt">about</Link>
                <Link to="/contact">contact</Link>
                <Link to="/">login</Link>
            </nav> 
            <Link to="/user">user</Link>       
        </>
    )
}

export default Navbar;