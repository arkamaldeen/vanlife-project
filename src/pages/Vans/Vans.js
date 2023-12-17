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
                <div className={`vanType ${van.type} selected`}>{van.type}</div>
            </Link>
        </div>
    ));

    return (
        <div className="vanPg">

            <section>
                <h1 className="vanPg-title">Explore our van options</h1>
                <div className="vanPg-tagDiv">
                    
                        <button onClick={() => setSearchParams({type: "simple"})} className="van-type simple ">Simple</button>
                    
                    
                        <button onClick={() => setSearchParams({type: "luxury"})} className="van-type luxury ">Luxury</button>
                    
                    
                        <button onClick={() => setSearchParams({type: "rugged"})} className="van-type rugged ">Rugged</button>
                    
                        <button onClick={() => setSearchParams({})} className="vanPg-tagElementClear luxury">Clear filters</button>
                    
                </div>
                <div className="vanPg-cardContainer">
                    {vanElements}
                </div>
            </section>

        </div>
    )
}

export default Vans;