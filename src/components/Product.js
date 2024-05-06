import { useDispatch } from "react-redux";
import { addProduct, removeFromCart } from "../utilties/Slice/cartSlice";

const Product=({products,isAddToCartButtonEnabled})=>{
   const {title,image,price,description}=products;
    const dispatch=useDispatch()
    const addItemToCart=()=>{
        dispatch(addProduct(products))
    }
    const removeFromCartEvent=()=>{
        dispatch(removeFromCart())
    }
    return (
        <div className="  shadow-lg border border-black m-4 p-4    items-center w-3/12">
            <div className=" ">
                <img src={image} className="w-20 m-auto"></img>
                {title}
                <div>{price}</div>
                <div>{description}</div>
                {
                    isAddToCartButtonEnabled &&<button onClick={addItemToCart}  className="  text-white   bg-slate-600 p-2  text-center ">Add to cart</button>
                }
                {
                    !isAddToCartButtonEnabled &&<button onClick={removeFromCartEvent}  className="  text-white   bg-red-600 p-2  text-center ">Remove </button>
                }
            </div>
        </div>
    )
}
export default Product