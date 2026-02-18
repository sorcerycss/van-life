import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {

    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    
    const location = useLocation()
    console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const loginMessage = location.state?.message || ""

    return (
        <>
            <div className="login-container">
                {loginMessage && <h3>{loginMessage}</h3>}
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                    />
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                    />
                    <button>Log in</button>
                </form>
                <p>Don't have an acount? <span>Create one now</span></p>
            </div>
        </>
    )
}