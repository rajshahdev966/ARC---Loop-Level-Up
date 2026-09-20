import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthProtected = ()=> {
    const {handle, archetype} = useSelector((state)=> state.auth);
    if((handle && archetype)){
        return <Navigate to={"/main"}/> 
    }
    return <Outlet/>
}

export default AuthProtected;