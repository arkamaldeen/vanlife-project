import { Link, useLocation, useLoaderData } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getVans } from "../../api";

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {

    const location = useLocation()
    const van = useLoaderData()
    console.log(van)

    const search = location.state?.search || ""
    const searchType = location.state.type !== "null" ? location.state.type : "all"

    return (
        <div className="vanDetailPg">
            <section>
                <div>
                    <Link
                        className="vanDetailPg-link"
                        to={`..?${search}`}
                        relative="path"
                    >
                        <KeyboardBackspaceIcon className="vanDetailPg-arrow" />Back to {searchType} vans
                    </Link>
                    <div className="vanDetailPg-container">
                        <img src={van.imageUrl} alt="img" />
                        <div className="vanDetail-info">
                            <div className={`vanType ${van.type} selected`}>{van.type}</div>
                            <h2>{van.name}</h2>
                            <p className="vanDetail-vanPrice"><span>${van.price}</span>/day</p>
                            <p className="vanDetailPg-description">{van.description}</p>
                            <button className="vanDetailPg-rent">Rent this van</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}