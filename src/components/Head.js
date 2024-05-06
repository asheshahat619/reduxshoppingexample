import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Head=()=>{
    const cartSelector=useSelector((store)=>store.cart.items)
    const navigate=useNavigate()
    const checkout=()=>{
        navigate("/cart")
    }
    const navigateToHome=()=>{
        navigate("/")
    }
    return(
        <div className="flex justify-around cursor-pointer">
            <div onClick={navigateToHome}>Ecommerce Website</div>
            <div  onClick={checkout}>Cart({cartSelector.length})</div>
        </div>
    )
}
export default Head;