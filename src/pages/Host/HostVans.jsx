import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../util";

export async function loader({request}) {
    await requireAuth(request)
    return getHostVans()
}

export default function HostVans() {
    const hostVans = useLoaderData()

    const hostVanElements = hostVans.map(van => (
        <Link to={van.id} key={van.id}>
            <div  className="hostVan-container">
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