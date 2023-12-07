import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function HostVans() {

    const [hostVans, setHostVans] = useState([]);

    console.log(hostVans)

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

    const hostVanElements = hostVans.map(van => (
        <Link to={`${van.id}`}>
            <div key={van.id} className="hostVan-container">
                <img src={van.imageUrl} alt="" className="hostVan-img" />
                <div className="hostVan-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className="hostVanslist-container">
            <h1>Your listed vans</h1>
            {hostVans.length > 0 ? hostVanElements : <h2 style={{marginTop: "32px"}}>Loading</h2>}
        </div>
    )
}