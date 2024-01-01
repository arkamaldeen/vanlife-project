import { Await, Link, NavLink, Outlet, defer, useLoaderData } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getVan } from "../../api";
import { requireAuth } from "../../util";
import { Suspense } from "react";

export async function loader({ params, request }) {
    // console.log(params)
    await requireAuth(request)
    return defer({ hostVanDetail: getVan(params.vanId) })
}

export default function HostVanDetail() {

    const dataPromise = useLoaderData()

    function renderHostVanDetail(van) {
        return (
            <>
                <div className="hostVanDetail-overview">
                    <img src={van.imageUrl} alt="img" />
                    <div className="vanDetail-info">
                        <div className={`vanType ${van.type} selected`}>{van.type}</div>
                        <h2>{van.name}</h2>
                        <p className="vanDetail-vanPrice"><span>${van.price}</span>/day</p>
                    </div>
                </div>
                <div className="hostDetailLayout-navHeader">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Details
                    </NavLink>
                    <NavLink
                        to="./pricing"
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Pricing
                    </NavLink>
                    <NavLink
                        to="./photos"
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Photos
                    </NavLink>
                </div>
                <Outlet context={{ van }} />
            </>
        )
    }

    return (
        <div>
            <Link className="vanDetailPg-link" to=".." relative="path"><KeyboardBackspaceIcon className="vanDetailPg-arrow" />Back to all vans</Link>
            <div className="hostVanDetail-container">
                <Suspense fallback={<h2>Loading ...</h2>}>
                    <Await resolve={dataPromise.hostVanDetail} >
                        {renderHostVanDetail}
                    </Await>
                </Suspense>
            </div>
        </div>


    )
}