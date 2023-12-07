import { Link  ,NavLink } from "react-router-dom"

function Header() {

    return (
        <div className="header">
            <section>
                <h1 className="header-title"><Link to="/">#VANLIFE</Link></h1>
                <div className="header-nav">
                    <div className="nav-item"><NavLink to="/host" className={({ isActive }) => isActive ? "activeLink" : null}>Host</NavLink></div>
                    <div className="nav-item"><NavLink to="/about" className={({ isActive }) => isActive ? "activeLink" : null}>About</NavLink></div>
                    <div className="nav-item"><NavLink to="/vans" className={({ isActive }) => isActive ? "activeLink" : null}>Vans</NavLink></div>
                </div>
            </section>
        </div>
    )
}

export default Header;