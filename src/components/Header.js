import { Link } from "react-router-dom"

function Header() {

    return (
        <div className="header">
            <section>
                <h1 className="header-title"><Link to="/">#VANLIFE</Link></h1>
                <div className="header-nav">
                    <div className="nav-item"><Link to="/about">About</Link></div>
                    <div className="nav-item">Vans</div>
                </div>
            </section>
        </div>
    )
}

export default Header;