import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail=()=>{
    const {id}=useParams();
    const [product,setProducts]=useState(null);

    async function fetchData(){
        let resp=await fetch(`https://fakestoreapi.com/products/${id}`);
        let res=await resp.json();
        setProducts(res);
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(!product)return <h1>Loding....</h1>

    return(
        <>
        <h1>product details</h1>
        <div>
            
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><b>Price:</b> ${product.price}</p>
        </div>
       
        </>
    )
}

export default ProductDetail;