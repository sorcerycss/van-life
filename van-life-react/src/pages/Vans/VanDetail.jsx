import { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { getVans } from "../../api"

export default function VanDetail() {
    const { id } = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    // const typeFilter = location.state?.search 
    // ? new URLSearchParams(location.state.search).get("type")
    // : null

    // Breakdown:
    // 1. location.state?.search
    //    - If location.state exists → get .search
    //    - If location.state is undefined → return undefined
    // 
    // 2. || ""
    //    - If result is undefined → use "" instead

    return (
        <>
            <div className="van-detail-container">
                {van ? (
                    <div className="van-detail">
                        {/* <button className="back-btn">Back to all vans</button> */}
                        <Link
                            to={`..${search}`}
                            relative="path"
                            className="back-btn"
                        ><span className="arrow">&larr;</span><span>Back to {type} vans</span></Link>
                        {/* {type ? `${type} vans` : "all vans"} */}

                        <img src={van.imageUrl} alt={van.name} />
                        <i className={`van-type ${van.type}`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-btn">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </>
    )
}