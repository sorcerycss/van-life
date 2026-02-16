import { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""

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
                        ><span className="arrow">&larr;</span><span>Back to all vans</span></Link>

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