import { useSelector } from "react-redux"
import Product from "./Product"
import { Link } from "react-router-dom"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    return cartItems.length==0?<h1>No items in the cart <span><Link to="/">Click here to add items </Link></span></h1>:(
        <div className="flex flex-wrap justify-center" >
            
            {
                cartItems.map(cartItem=><Product products={cartItem} isAddToCartButtonEnabled={false} />)
            }
        </div>
    )
}
export default Cart