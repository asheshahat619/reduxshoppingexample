import { useEffect, useState } from "react"
import { GET_PRODUCTS } from "../utilties/constant"
import Product from "./Product"
import Shimmer from "./Shimmer"
const Body=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async ()=>{
        const products=await fetch(GET_PRODUCTS)
        const productsJson=await products.json()
        setProducts(productsJson)
    }
    return products.length==0? <Shimmer/>: (
        <div className="flex flex-wrap justify-center">
            {
                products.map(product=><Product key={product?.id} products={product} isAddToCartButtonEnabled={true}/>)
            }
        </div>
    )   
}
export default Body