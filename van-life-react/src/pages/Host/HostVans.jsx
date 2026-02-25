import { useState, useEffect } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

export async function loader() {
    const vans = await getHostVans()
    return { vans }
} 

export default function HostVans() {

    const { vans } = useLoaderData()

    // const [vans, setVans] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getHostVans()
    //             setVans(data)
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     loadVans()
    // }, [])

    // console.log("Vans state:", vans)

    // if (loading) return <h1>Loading...</h1>

    const hostVanElements = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link"
        >
            <div className="host-van-card">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-name-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    // if (error) {
    //     return <h1>There was an error: {error.message}</h1>
    // }

    return (
        <>
            <div className="host-van-list-container">
                    <div className="host-van-list">
                        <h1>Your listed vans</h1>
                        {vans.length > 0 ? hostVanElements : <p>No vans listed yet</p>}
                    </div>
            </div>
        </>
    )
}