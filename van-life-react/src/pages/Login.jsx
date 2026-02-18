import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    
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

    return (
        <>
            <div className="login-container">
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