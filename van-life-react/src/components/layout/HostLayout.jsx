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
                    to="."
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className=""
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    to="income"
                >
                    Income
                </NavLink>
                 <NavLink
                    className=""
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    to="vans"
                >
                    Vans
                </NavLink>
                <NavLink
                    style={({isActive}) => isActive ? hostLayoutStyle : null}
                    className=""
                    to="reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            
            <Outlet />
        </>
    )
}