import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVanDetail() {

    const { id } = useParams()
    const [van, setVan] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    console.log("Current van state:", van)

    useEffect(() => {
         async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setVan(data[0])
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

    const hostVanLayoutStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            <section className="host-van-detail-section">

                <Link
                    to=".."
                    relative="path"
                    className="back-btn"
                ><span className="arrow">&larr;</span><span>Back to all vans</span></Link>

            <div className="host-van-detail-container">
                
                {van ? (
                    <div className="host-van-details">

                        <section className="main-details">
                            <img src={van.imageUrl} alt={van.name} />
                            <div className="host-van-info">
                                <i className={`van-type ${van.type}`}>{van.type}</i>
                                <h2>{van.name}</h2>
                                <p>${van.price}<span>/day</span></p>
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