import { Link } from "react-router-dom"
import aboutHero from "../../assets/about-hero.png"

import "./About.css"

export default function About() {
  return (
    <div className="container">
      <section className="about-section">
        <img className="about-hero" src={aboutHero} alt="" />
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel
          van rental. Our vans are recertified before each trip to ensure
          your travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="explore-vans">
          <p className="">
            Your destination is waiting.
          </p>
          <p className="">
            Your van is ready.
          </p>
          <button className="">Explore our vans</button>
          <Link className="link-button" to="/vans">Explore our vans</Link>
        </div>
      </section>
    </div>
  )
}