import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-hero">
      <div className="container">
        <h1 className="hero-title">You got the travel plans, we got the travel vans.</h1>
        <p className="hero-text">
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        {/* <button className="btn btn-home">Find your van</button> */}
        <Link to="/vans">Find your van</Link>
      </div>
    </div>
  )
}
