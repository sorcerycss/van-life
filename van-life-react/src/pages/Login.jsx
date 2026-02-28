import { useState } from "react"
import { useNavigate, useLocation, useSearchParams, useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    const message = new URL(request.url).searchParams.get("message")
    console.log("📨 Message from URL:", message)
    return message
    // const url = new URL(request.url)
    // return {
    //     message: url.searchParams.get("message"),
    //     redirectTo: url.searchParams.get("redirectTo")
    // }
}

export default function Login() {

    // const { message, redirectTo } = useLoaderData()

    // const [searchParams] = useSearchParams()

    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    // const message = searchParams.get("message")
    // const redirectTo = searchParams.get("redirectTo") || "/host"

   async function handleSubmit(e) {
    e.preventDefault()
    // console.log("🔵 Form submitted")
    setStatus("submitting")
    setError(null)
    
    try {
        // console.log("🟡 Calling loginUser...")
        const data = await loginUser(loginFormData)
        // const data = await loginUser(loginFormData)
        // console.log("🟢 Login successful:", data)
        localStorage.setItem("loggedin", true)
        // console.log("🚀 About to navigate to /host")

        // const [searchParams] = useSearchParams()
        // const redirectTo = searchParams.get("redirecTo") || "/host"
        const from = location.state?.from || "/host"
        navigate(from, { replace: true })
        
        // console.log("✅ Navigate called")
        
    } catch (err) {
        // console.error("🔴 Login failed:", err)
        setError(err)
    } finally {
        setStatus("idle")
    }
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
                {/* {message && <h3>{message}</h3>} */}
                <h1>Sign in to your account</h1>
                {error?.message && <h3>{error.message}</h3>}
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
                    <button disabled={status === "submitting"}>
                        {status === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </form>
                <p>Don't have an account? <span>Create one now</span></p>
            </div>
        </>
    )
}