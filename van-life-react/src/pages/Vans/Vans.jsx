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
                to={van.id}
                state={{search: `?${searchParams.toString()}`,
                        type: typeFilter
            }}
                // Pass search params!
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

    function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams)
            if (value === null) {
                sp.delete(key)
            } else {
                sp.set(key, value)
            }
        return `?${sp.toString()}`
    }

   function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
                return prevParams
        })
    }

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>

                {/* <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
                <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
                <Link to={genNewSearchParamString("type", null)}>Clear</Link> */}

                {/* <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
                <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
                <button onClick={() => handleFilterChange("type", null)}>Clear</button> */}

                <div className="van-type-filter">
                    {/* <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                    >Simple</button> */}
                    <button className="van-type" onClick={() => setSearchParams({type: "simple"})}>Simple</button>
                    <button className="van-type" onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
                    <button className="van-type" onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
                    
                    {typeFilter && (
                        <button className="btn-clear-filters" onClick={() => setSearchParams({})}>Clear filters</button>
                    )}
                </div>

                <div className="van-list">
                    {vanElements}
                </div>
                
            </div>
        </>
    )
}