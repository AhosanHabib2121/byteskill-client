import { NavLink } from "react-router-dom";
import Container from "../Container";
import logo from '../../../assets/logo_ByteSkill.png'

const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allClasses'>All Classes</NavLink></li>
    </>
    return (
        <div className="bg-[#1C1E2A] fixed w-full top-0 z-10">
            <Container>
                <div className="navbar text-white py-4 ">
                    <div className="navbar-start">
                        <div className="dropdown mr-2">
                            <label tabIndex={0} className="btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLink}
                            </ul>
                        </div>
                        {/* logo and website name here */}
                        <div className=" flex items-center justify-center gap-2">
                            <img src={logo} className=" " alt="not found" />
                            <a className="text-xl text-white">ByteSkill</a>
                        </div>
                    </div>
                    
                    <div className="navbar-end gap-16">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navLink}
                            </ul>
                        </div>
                        {/* sign in and if user logged profile photo set here */}
                        <div>
                            <a className="btn">Sign in</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;