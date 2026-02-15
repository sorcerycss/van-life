import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

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

    const vanDisplayed = typeFilter
        ? vanData.filter(van => van.type === typeFilter)
        : vanData

    const vanElements = vanDisplayed.map(van => (
        <div className="van-container" key={van.id}>
            <Link
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, 
                priced at $${van.price} per day`}
            >
                <img className="van-img" src={van.imageUrl} alt={van.name} />
                
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p className="van-price">
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
            </Link>
            <i className={`van-type ${van.type}`}>{van.type}</i>
        </div>
    ))

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>

                <div className="van-type-filter">
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <button className="btn-clear-filters">Clear filters</button>
                </div>

                <div className="van-list">
                    {vanElements}
                </div>
                
            </div>
        </>
    )
}