import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";


export default function DefaultLayout() {
    return (
        <>
            <div>

                <header>
                    <Navbar />
                </header>
                <Outlet />
                <Footer />

            </div>
        </>

    );
}

