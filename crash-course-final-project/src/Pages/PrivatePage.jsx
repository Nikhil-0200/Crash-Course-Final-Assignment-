import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export const PrivatePage = (props) =>{
    const {isLoggedIn} = useContext(AuthContext)

    return !isLoggedIn.loggedStatus ? <Navigate to="/login" /> : props.children
}