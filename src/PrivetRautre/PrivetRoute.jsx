import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log('privet route', location)

    if(loading){
        return <div className="flex justify-center h-[60vh] items-center ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state ={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;