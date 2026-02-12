import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => {
            console.log("Full data:", data)
            console.log("data.vans:", data.vans)
            setVans(data.vans)
    })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, [])

    console.log("Vans state:", vans)

    if (loading) return <h1>Loading...</h1>

    const hostVanElements = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
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