import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getHostVans } from "../../api";
import { requireAuth } from "../../util";

export async function loader({params, request}) {
    // console.log(params)
    await requireAuth(request)
    return getHostVans(params.vanId)
} 

export default function HostVanDetail() {

    const van = useLoaderData()

    return (
        <div>
            <Link className="vanDetailPg-link" to=".." relative="path"><KeyboardBackspaceIcon className="vanDetailPg-arrow" />Back to all vans</Link>
            <div className="hostVanDetail-container">
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
                <Outlet context={{van}}/>
            </div>
        </div>


    )
}