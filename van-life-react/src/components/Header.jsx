import { NavLink, Link } from "react-router-dom"
import iconAvatar from "/public/avatar-icon.svg"

export default function Header() {
    return (
        <header className="header">
            <Link className="logo" to="/">
                <img className="" src="/public/vanlife-logo.png" alt="Vanlife" />
            </Link>
            <nav className="navbar">
                <NavLink
                    className={({isActive}) => isActive ? "current-page" : ""}
                    to="/host"
                >
                    Host
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? "current-page" : ""}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? "current-page" : ""}
                    to="/vans"
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        className="login-icon"
                        src={iconAvatar}
                        alt="Avatar" />
                </Link>
             </nav>
        </header>
    )
}