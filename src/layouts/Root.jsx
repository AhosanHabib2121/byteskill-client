import { Outlet } from "react-router-dom";
import Navbar from "../components/share/navbar/Navbar";

const Root = () => {
    return (
        <div className=" font-fontRoboto bg-[#1C1E2A] text-white">
            {/* navbar here */}
            <Navbar/>
            {/* outlet here */}
            <Outlet/>
        </div>
    );
};

export default Root;