import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import Container from "../../components/share/Container";
import signInUp from '../../assets/sign-in-up.png'
import GoogleLogin from "../../components/share/googleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signIn } = useAuth();
    const [passShowHide, setPassShowHide] = useState(false);
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // error message clean
        setError("");

        if (password.length < 6) {
            setError("Password must be 6 characters!");
            return;
        }
        signIn(email, password)
            .then(data => {
                const lastLoginAt = data.user?.metadata?.lastSignInTime;
                const userInfo = {
                    email,
                    password,
                    lastLoginAt,
                };
                axiosPublic.patch('/api/user', userInfo)
                    .then(res => {
                        if (res.data.modifiedCount == 1) {
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
                                title: "SignIn successfully",
                            });
                            form.reset();
                            navigate(from, {replace:true});
                        }
                    })
            })
            .catch(error => setError(error.message));
    }

    return (
        <div className=" mt-20">
            <Container>
                <div className=" min-h-screen">
                    <div className="hero-content flex-col lg:flex-row lg:gap-16 ">
                        {/* image part here */}
                        <div className="text-center lg:text-left max-w-lg">
                            <img src={signInUp} alt="not found" />
                        </div>
                        {/* form part here */}
                        <div className="card flex-shrink-0 w-full max-w-sm border border-[#D0D0D0] ">
                            <h1 className="text-[#fff] text-4xl text-center font-semibold mt-8">
                                Sign In
                            </h1>
                            <div className=" px-8 py-5">
                                {error ? <p className=" text-red-500">{error}</p> : ""}
                            </div>
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[#fff]">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered text-black"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[#fff] ">Password</span>
                                    </label>
                                    <div className="form-control relative">
                                        <input
                                            type={passShowHide ? "text" : "password"}
                                            name="password"
                                            placeholder="password"
                                            className="input input-bordered text-black"
                                            required
                                        />

                                        <div className=" absolute right-3 translate-y-4 text-black">
                                            {passShowHide ? (
                                                <BiSolidHide
                                                    onClick={() => setPassShowHide(false)}
                                                    className=" text-xl"
                                                />
                                            ) : (
                                                <BiSolidShow
                                                    onClick={() => setPassShowHide(true)}
                                                    className="text-xl"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <label className="my-2">
                                        <a
                                            href="#"
                                            className="label-text-alt link link-hover text-sm text-white"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        className="btn bg-[#9333EA] text-white normal-case text-lg hover:bg-[#7517cc] border-0"
                                        value="Sign In"
                                    />
                                </div>
                            </form>
                            <div className=" text-center mb-6">
                                <p className=" text-base font-medium text-[#fff] ">
                                    Create a new account?{" "}
                                    <Link to="/signUp" className=" text-[#9233eac6]">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                            {/* google button */}
                            <div className="text-center mt-4 mb-4">
                                <GoogleLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;