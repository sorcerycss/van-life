import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {

    const { van } = useOutletContext()

     if (!van) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <section className="host-van-photos-info">
                <img src={van.imageUrl} alt={van.name} />
            </section>
        </>
    )
}