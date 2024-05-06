import { Outlet } from "react-router-dom"
import Head from "./Head"
const Main=()=>{
    return(
        <div>
            <Head/>
            <Outlet/>
        </div>
    )
}
export default Main