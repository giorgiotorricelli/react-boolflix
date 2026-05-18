import { Outlet } from "react-router"
import SearchBar from "../components/SearchBar"

function MainLayout() {
    return (
        <>
            <header>
                <h1>BOOTFLIX</h1>
                <SearchBar/>
            </header>
            <Outlet />
        </>

    )
}

export default MainLayout