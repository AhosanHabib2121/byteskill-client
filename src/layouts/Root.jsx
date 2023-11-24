import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/share/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('signIn') || location.pathname.includes('signUp');
    return (
        <div className=" font-fontRoboto bg-[#1C1E2A] text-white">
            {/* navbar here */}
            <Navbar/>
            
            {/* outlet here */}
            <Outlet />

            {/* footer section */}
            {noFooter || <Footer />}
            
        </div>
    );
};

export default Root;