// import { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
    return getVans()
}

function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()

    const vans = useLoaderData() 
    console.log(vans)

    const typeFilter = searchParams.get("type")
    
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="vanPg-card">
            <Link
                to={van.id}
                state={{ search: `${searchParams.toString()}`, type: `${typeFilter}` }}
            >
                <img src={van.imageUrl} alt="" />
                <div className="vanPg-cardInfo">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <div className={`vanType ${van.type} selected`}>{van.type}</div>
            </Link>
        </div>
    ));

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {

            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            console.log(prevParams)
            return prevParams
        })
    }

    return (
        <div className="vanPg">

            <section>
                <h1 className="vanPg-title">Explore our van options</h1>
                <div className="vanPg-tagDiv">
                    <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
                        Simple
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "luxury")}
                        className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
                        Luxury
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "rugged")}
                        className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
                        Rugged
                    </button>

                    {typeFilter ? (
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="vanPg-tagElementClear luxury">
                            Clear filters
                        </button>
                    ) : null}

                </div>
                <div className="vanPg-cardContainer">
                    {vanElements}
                </div>
            </section>

        </div>
    )
}

export default Vans;