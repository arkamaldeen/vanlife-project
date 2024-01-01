import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../util";
import { Suspense } from "react";

export async function loader({request}) {
    await requireAuth(request)
    return defer({hostVans: getHostVans()})
}

export default function HostVans() {
    const dataPromise = useLoaderData()

    function renderHostVanElements(hostVans) {
        console.log(hostVans)
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
            <>
                {hostVanElements}
            </>
        )
    }

    

    return (
        <div className="hostVanslist-container">
            <h1>Your listed vans</h1>
            <Suspense fallback={<h2 style={{marginTop: "32px"}}>Loading ...</h2>}>
                <Await resolve={dataPromise.hostVans} >
                    {renderHostVanElements}
                </Await>
            </Suspense>
        </div>
    )
}