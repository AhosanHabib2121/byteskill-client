import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import Container from "../../components/share/Container";
import signInUp from '../../assets/sign-in-up.png'

const SignIn = () => {
    const [passShowHide, setPassShowHide] = useState(false);
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
                                {/* {error ? <p className=" text-red-500">{error}</p> : ""} */}
                            </div>
                            {/* onSubmit={handleLogin} */}
                            <form className="card-body">
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
                                <button
                                    // onClick={handleGoogle}
                                    className="btn bg-inherit hover:bg-[#6623a4]  outline-1  normal-case rounded-full w-64 border-gray-400 text-white "
                                >
                                    <FcGoogle className=" text-3xl top-2 left-4 md:left-32 " />
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;