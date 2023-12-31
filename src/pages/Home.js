import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="homePg">
            <div>
                <section>
                    <h1 className="homePg-title">You got the travel plans, we got the travel vans.</h1>
                    <p className="homePg-content">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip</p>
                    <Link to="vans"><button className="homePg-button">Find your van</button></Link>
                </section>
            </div>
        </div>
    )
}

export default Home;