import React from "react";
import ReactDOM from "react-dom"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utilties/store"
import Cart from "./components/cart";
import Main from "./components/Main";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
        {
            path:"/",
            element:<Body/>
        },
            {
                path:"/cart",
                element:<Cart/>
            }
                
        ]
    }
])
const AppLayout = () => {
    return (
        <div>

        <Provider store={appStore}>

<RouterProvider router={appRouter}>
        <Outlet></Outlet>
</RouterProvider>


        </Provider>
        </div>
    )
}

const id = ReactDOM.createRoot(document.getElementById("root"))
id.render(<AppLayout />)