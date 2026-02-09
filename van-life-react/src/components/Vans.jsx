import { useEffect, useState } from 'react'

export default function Vans() {
    const [vanData, setVanData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data.vans))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <h1>Loading...</h1>

    const vanElements = vanData.map(van => (
        <div key={van.id}>
            <h3>{van.name}</h3>
            <p>${van.price}</p>
        </div>
    ))

    return (
        <>
            {vanElements}
        </>
    )
}