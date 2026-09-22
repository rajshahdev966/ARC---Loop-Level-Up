import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router"

const VisionProtected = ()=> {
    const {handle, archetype} = useSelector((state)=> state.auth);
    if(!handle || !archetype){
        return <Navigate to={"/login"}/>
    }
    return <Outlet/>
}

export default VisionProtected