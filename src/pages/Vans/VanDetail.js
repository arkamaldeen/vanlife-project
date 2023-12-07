import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function VanDetail() {

    const [van, setVan] = useState(null)

    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    console.log(van)

    return (
        <div className="vanDetailPg">
            <section>
                {van ? (
                    <div>
                        <Link className="vanDetailPg-link" to="/vans"><KeyboardBackspaceIcon className="vanDetailPg-arrow"/>Back to all vans</Link>
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
                ) : <h2>Loading...</h2>}
            </section>
        </div>
    )
}