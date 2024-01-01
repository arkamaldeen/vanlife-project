import { Link } from "react-router-dom"

function About() {
    return (
        <div className="about">
            <div className="aboutPg-bg"></div>
            <section>
                <div className="aboutPg-content" >
                    <h1 >Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p >
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                        <br />
                        <br />
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="aboutPg-banner">
                    <h1>
                        Your destination is waiting.
                        Your van is ready.
                    </h1>
                    <Link to="/vans"><button>Explore our vans</button></Link>
                </div>
            </section>
        </div>
    )
}

export default About;