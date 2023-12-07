import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <h1>Host Dashboard Here!</h1>
            <Outlet />
        </>
    )
}