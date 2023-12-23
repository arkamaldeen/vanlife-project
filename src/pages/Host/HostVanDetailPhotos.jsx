import { useOutletContext } from "react-router-dom"

export default function HostVanDetailPhotos() {

    const {van} = useOutletContext()
    return (
        <img src={van.imageUrl} className="hostVanDetailPhotos" alt="" />
    )
}