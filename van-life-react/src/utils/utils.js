import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    console.log("🔵 requireAuth called!")
    
    const isLoggedIn = localStorage.getItem("loggedin")
    console.log("🟡 isLoggedIn:", isLoggedIn)


    // const pathname = new URL(request.url).pathname
    // const isLoggedIn = false

    if (!isLoggedIn) {
        console.log("🔴 Not logged in - redirecting!")
        // const pathname = new 
        // URL(request.url).pathname
        // throw redirect(`/login?message=You must log in first&redirectTo=${pathname}`)
        // throw redirect("/login?message=You must log in first.")
        const pathname = new URL(request.url).pathname
        throw redirect(`/login?message=You must log in first&redirectTo=${pathname}`)
    }

    console.log("✅ Logged in - continuing")
    return null
}