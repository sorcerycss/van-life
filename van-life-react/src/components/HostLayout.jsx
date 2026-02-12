import { Link, Outlet } from "react-router-dom"
import Dashboard from "../pages/Host/Dashboard"

export default function HostLayout() {
    return (
        <>
            <nav className="host-navbar">
                <Link className="" to="/host">Dashboard</Link>
                <Link className="" to="/host/income">Income</Link>
                <Link className="" to="/host/reviews">Reviews</Link>
            </nav>
            
            <Outlet />
        </>
    )
}