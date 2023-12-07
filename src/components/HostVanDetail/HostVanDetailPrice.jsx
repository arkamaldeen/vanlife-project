import { useOutletContext } from "react-router-dom"


export default function HostVanDetailPrice() {

    const {van} = useOutletContext()

    return (
         <h1 className="hostVanDetailPrice"><span>${van.price}</span>/day</h1>
    )
}