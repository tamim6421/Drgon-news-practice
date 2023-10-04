import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivetRoute from "../PrivetRautre/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout></Layout>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader:()=> fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivetRoute><NewsDetails></NewsDetails>,</PrivetRoute>,
                loader:()=> fetch('/news.json')


            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;