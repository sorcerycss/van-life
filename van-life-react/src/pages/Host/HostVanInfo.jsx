import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

    const { van } = useOutletContext()

    return (
        <>
            <section className="host-van-info">
                <p>Name: {van.name}</p>
                <p>Category: {van.type}</p>
                <p>Description: {van.description}</p>
                <p>Visibility: Public</p>
            </section>
        </>
    )
}