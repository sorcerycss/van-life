import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

export default function HostVanDetail() {

    const params = useParams()
    const [van, setVan] = useState([])

    console.log("Current van state:", van)

    useEffect(() => {
        console.log("Fetching van with ID:", params.id)
        fetch(`/api/host/vans/${params.id}`)
        .then(res => {
            console.log("Response:", res)
            return res.json()
        })
        .then(data => {
            console.log("Data received:", data)
            console.log("data.vans:", data.vans)
            setVan(data.vans[0])
    })
        .catch(err => console.error("Fetch error:", err))
    }, [params.id])

    const hostVanLayoutStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            <section>

                <Link
                    to=".."
                    relative="path"
                    className="back-btn"
                >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-container">
                
                {van ? (
                    <div className="host-van-details">

                        <section className="main-details">
                            <img src={van.imageUrl} alt={van.name} />
                            <div className="host-van-info">
                                <i className={`van-type ${van.type}`}>{van.type}</i>
                                <h2>{van.name}</h2>
                                <p>${van.price}/day</p>
                            </div>
                        </section>
                        
                    </div>
                ) : <h2>Loading...</h2>}

                <nav className="host-vans-navbar">
                <NavLink
                    style={({isActive}) => isActive ? hostVanLayoutStyle : null}
                    to="."
                    end
                >
                    Details
                </NavLink>
                <NavLink
                    style={({isActive}) => isActive ? hostVanLayoutStyle : null}
                     to="pricing"
                >
                    Pricing
                </NavLink>
                <NavLink
                    style={({isActive}) => isActive ? hostVanLayoutStyle : null}
                    to="photos"
                >
                     Photos
                 </NavLink>
                </nav>

                <Outlet context={{ van }} />

            </div>
        </section>
        </>
    )
}