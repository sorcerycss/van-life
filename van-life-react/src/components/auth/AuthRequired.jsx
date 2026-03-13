import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {

    const location = useLocation()

    // const authenticated = false
    // const authenticated = true
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        return <Navigate
            to="/login"
            state={{message: "You must log in first",
                    from: location.pathname
        }} replace />
    }

    return <Outlet />
}