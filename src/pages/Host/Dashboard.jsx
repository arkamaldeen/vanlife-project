import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../util";
import { BsStarFill } from "react-icons/bs"

export async function loader({request}) {
    await requireAuth(request)
    return defer({hostVans: getHostVans()})
}

export default function Dashboard() {
    const dataPromise = useLoaderData()
    console.log(dataPromise)

    function renderHostVanElements(hostVans) {
        console.log(hostVans)
        const hostVanElements = hostVans.map(van => (
            <div key={van.id}>
                <div  className="hostVan-container">
                    <img src={van.imageUrl} alt="" className="hostVan-img" />
                    <div className="hostVan-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                </div>
            </div>
        ))

        return (
            <>
                {hostVanElements}
            </>
        )
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={dataPromise.hostVans}>{renderHostVanElements}</Await>
                </React.Suspense>
            </section>
        </>
    )
}