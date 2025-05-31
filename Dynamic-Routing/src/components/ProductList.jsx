import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts]=useState([]);

    async function fetchData() {
        let resp=await fetch("https://fakestoreapi.com//Products");
        let res=await resp.json();
        setProducts(res);
        console.log(res);
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(!products)return <h1>loding...</h1>
   
    return(
        <>
        <h1>products</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"30px"}}>
            {products.map((product)=>(
                <div key={product.id}>
                    <img src={product.image} width={150} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}`}>View Product</Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProductList;