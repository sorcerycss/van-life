import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {

    const { van } = useOutletContext()

    return (
        <>  
            <section className="host-van-pricing-info">
                <p>${van.price}<span>/day</span></p>
            </section>
        </>
    )
}