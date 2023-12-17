import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => (setVans(data.vans)))

    }, []);

    const displayedVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter)
    : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="vanPg-card">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="" />
                <div className="vanPg-cardInfo">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <div className={`vanType ${van.type}`}>{van.type}</div>
            </Link>
        </div>
    ));

    return (
        <div className="vanPg">

            <section>
                <h1 className="vanPg-title">Explore our van options</h1>
                <div className="vanPg-tagDiv">
                    <div className="vanPg-tagElement">Simple</div>
                    <div className="vanPg-tagElement">Luxury</div>
                    <div className="vanPg-tagElement">Rugged</div>
                    <div className="vanPg-tagElementClear">Clear filters</div>
                </div>
                <div className="vanPg-cardContainer">
                    {vanElements}
                </div>
            </section>

        </div>
    )
}

export default Vans;