import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

    const hostLayoutStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            <nav className="host-navbar">
                <NavLink
                    className=""
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    to="/host"
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className=""
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    to="/host/income"
                >
                    Income
                </NavLink>
                <NavLink
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    className=""
                    to="/host/reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            
            <Outlet />
        </>
    )
}