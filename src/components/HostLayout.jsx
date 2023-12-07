import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"


export default function HostLayout() {


    return (
        <div className="body">
            <section>
                <div className="hostLayout-navHeader">
                    <NavLink
                        to="/host"
                        end
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="income"
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Income
                    </NavLink>
                    <NavLink
                        to="vans"
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Vans
                    </NavLink>
                    <NavLink
                        to="reviews"
                        className={({ isActive }) => isActive ? `selectedStyle hostnav-item` : "hostnav-item"}>
                        Reviews
                    </NavLink>
                </div>
                <Outlet />
            </section>

        </div>
    )
}