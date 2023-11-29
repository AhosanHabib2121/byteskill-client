import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import logo from '../../../assets/logo_ByteSkill.png'
import './Navbar.css'
import Button from "../../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const navLink = <>
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink to='/allClasses'>All Classes</NavLink></li>
        <li><NavLink to='/teachnByteskill'>Teach on Byteskill</NavLink></li>
    </>
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "logout completed",
                });
            })
    }

    return (
        <div className="bg-[#1C1E2A] fixed w-full top-0 z-10 ">
            <Container>
                <div className="navbar text-white py-4 ">
                    <div className="navbar-start">
                        <div className="dropdown mr-2">
                            <label tabIndex={0} className="btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1C1E2A] rounded-box w-52">
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
                            <ul className="gap-4 text-lg menu-horizontal px-1">
                                {navLink}
                            </ul>
                        </div>
                        {/* sign in and if user logged profile photo set here */}
                        <div>
                            {user ? <>
                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-full rounded-full">
                                            <img src={user?.photoURL} alt="not found" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#1C1E2A] rounded-box w-52">
                                        <li>
                                            <p className="justify-between">
                                                {user?.displayName}
                                            </p>
                                        </li>
                                        <li><Link to='/dashboard/admin'>Dashboard</Link></li>
                                        <Button
                                            onClick={handleLogout}
                                            label={'Logout'}
                                        />
                                    </ul>
                                </div>
                            </>
                            : <>
                                <Link to='/signIn'>
                                    <Button
                                        label={'Sign in'}
                                        round={'rounded-full'}
                                        outline={true}
                                        icon={<FaArrowRightLong />}
                                    />
                                </Link>
                                </>
                            }
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;