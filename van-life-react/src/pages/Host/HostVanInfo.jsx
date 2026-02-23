import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

    const { van } = useOutletContext()

    if (!van) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <section className="host-van-info">
                <p>Name: <span>{van.name}</span></p>
                <p>Category: <span>{van.type}</span></p>
                <p>Description: <span>{van.description}</span></p>
                <p>Visibility: <span>Public</span></p>
            </section>
        </>
    )
}