import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="header">
            <Link className="logo" to="/">
                <img className="" src="/public/vanlife-logo.png" alt="Vanlife" />
            </Link>
            <nav className="navbar">
                <Link className="link-item current-page" to="/about">About</Link>
                <Link className="link-item" to="/vans">Vans</Link>
             </nav>
        </header>
    )
}