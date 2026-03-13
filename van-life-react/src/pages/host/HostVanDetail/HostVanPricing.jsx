import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {

    const { van } = useOutletContext()

     if (!van) {
        return <h2>Loading...</h2>
    }

    return (
        <>  
            <section className="host-van-pricing-info">
                <p>${van.price}<span>/day</span></p>
            </section>
        </>
    )
}