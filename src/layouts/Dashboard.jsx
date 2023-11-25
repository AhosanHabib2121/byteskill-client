import { FaHome } from "react-icons/fa";
import { FaBars, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {
    return (
        <div className="">
            {/* side menubar */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col pt-8 mx-8">
                    {/* Page content here */}
                    <div className=" grid justify-end">
                        <label htmlFor="my-drawer-2" className="btn bg-[#9050cc] text-white drawer-button lg:hidden"><FaBars/></label>
                    </div>

                    {/* main content here */}
                    <div>
                        <Outlet />
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-6 text-lg font-semibold w-60 min-h-full bg-[#1C1E2A] text-white space-y-4">
                        {/* Sidebar content here */}

                        {/* admin routes here */}
                        <li><NavLink to='/dashboard' className='flex items-center gap-3'><FaHome className=" text-2xl" />Dashboard</NavLink></li>

                        <li><NavLink to='/dashboard/teacherRequest' className='flex items-center gap-3'><VscGitPullRequestGoToChanges className=" text-2xl" /> Teacher Request</NavLink></li>

                        <li><NavLink to='/dashboard/allclasses' className='flex items-center gap-3'><LuGalleryVerticalEnd className=" text-2xl" /> All clesses</NavLink></li>
                        
                        <li><NavLink to='/dashboard/users' className='flex items-center gap-3'><FaUsers className=" text-2xl" /> Users</NavLink></li>
                        
                        <li><NavLink to='/dashboard/profile' className='flex items-center gap-3'><CgProfile className=" text-2xl"/> Profile</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;