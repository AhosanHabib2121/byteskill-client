/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import Container from "../../components/share/Container";
import signInUp from '../../assets/sign-in-up.png'
import useImageUpload from "../../hooks/useImageUpload";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/share/googleLogin/GoogleLogin";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [passShowHide, setPassShowHide] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [error, setError] = useState('')


    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        // error message clean
        setError("");

        if (password.length < 6) {
            setError("Password must be 6 characters!");
            return;
        }

        // image upload in imgbb host server start
        const imageData = await useImageUpload(image);
        // firebased create user
        createUser(email, password)
            .then(data => {
                updateUserProfile(name, imageData?.data?.display_url)
                    .then(() => {
                        const userData = {
                            name: data?.user?.displayName,
                            email: data?.user?.email,
                            image: imageData?.data?.display_url
                        }
                        axiosSecure.post('/api/user', userData)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    const Toast = Swal.mixin({
                                        toast: true,
                                        position: "top-end",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener(
                                                "mouseenter",
                                                Swal.stopTimer
                                            );
                                            toast.addEventListener(
                                                "mouseleave",
                                                Swal.resumeTimer
                                            );
                                        },
                                    });
                                    Toast.fire({
                                        icon: "success",
                                        title: "Account create successfully",
                                    });
                                    form.reset();
                                    navigate('/');
                                }
                            })

                    })
            })
            .catch(err => setError(err));



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
                                Sign Up
                            </h1>
                            <div className=" px-8 py-5">
                                {error ? <p className=" text-red-500">{error}</p> : ""}
                            </div>
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg font-poppins font-medium ">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered text-black"
                                        required
                                    />
                                </div>
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
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Image</span>
                                        </label>
                                        <input
                                            required
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                        />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        className="btn bg-[#9333EA] text-white normal-case text-lg hover:bg-[#7517cc] border-0"
                                        value="Sign Up"
                                    />
                                </div>
                            </form>
                            <div className=" text-center mb-6">
                                <p className=" text-base font-medium text-[#fff] ">
                                    Create a new account?{" "}
                                    <Link to="/signIn" className=" text-[#9233eac6]">
                                        SignIn
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


export default SignUp;