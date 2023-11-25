import { Link } from "react-router-dom";
import logo from '../../assets/logo_ByteSkill.png'

import {  MdCall, MdEmail } from "react-icons/md";
import Button from "../button/Button";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "../share/Container";

const Footer = () => {
    return (
        <>
            <div className=" bg-[#1C1E2A] relative">
                <Container>
                    <footer className="footer justify-center md:px-5 md:justify-normal lg:px-0 py-20  font-fontRoboto ">
                        <aside>
                            <div className=" flex  md:gap-2 items-center">
                                <img
                                    src={logo}
                                    alt="not found"
                                    className=" w-20 md:w-24 h-auto"
                                />
                                <Link
                                    to="/"
                                    className=" uppercase text-lg md:text-2xl font-semibold tracking-wider font-robotFont"
                                >
                                    BYTESKILL
                                </Link>
                            </div>
                            <p className=" text-sm text-[#94A3B8]">
                                BYTESKILL Etiam interdum arcu metus, <br /> eget ultricies eros euismod ut.
                            </p>
                            <div className=" flex gap-2 text-[#94A3B8]">
                                <MdEmail className=" text-xl" />
                                contact@yourdomain.com
                            </div>
                            <div className=" flex gap-2 text-[#94A3B8]">
                                <MdCall className=" text-xl" />
                                Phone: +1(2)345 6789
                            </div>

                        </aside>
                        <nav>
                            <header className=" footer-title text-xl mb-4 text-white  opacity-100 ">
                                Services
                            </header>
                            <div className=" space-y-3 text-[#94A3B8]">
                                <div className=" flex gap-2">
                                    <Link className="link link-hover hover:text-[#b675f6ec]">
                                        E-Learning
                                    </Link>
                                </div>
                                <div className=" flex gap-2">
                                    <Link className="link link-hover hover:text-[#b675f6ec]">
                                        Bootcamp
                                    </Link>
                                </div>
                                <div className=" flex gap-2">
                                    <Link className="link link-hover hover:text-[#b675f6ec]">
                                        Webinar
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        <nav>
                            <header className="footer-title text-xl mb-4 text-white  opacity-100">
                                Company
                            </header>
                            <Link className="link link-hover text-[#94A3B8] hover:text-[#b675f6ec]">
                                Home
                            </Link>
                            <Link className="link link-hover text-[#94A3B8] hover:text-[#b675f6ec]">
                                All Classes
                            </Link>
                        </nav>
                        <nav>
                            <header className="footer-title text-xl mb-4 text-white  opacity-100">
                                Newsletter
                            </header>
                            <div>
                                <p className=" max-w-xs mb-4 text-[#94A3B8]">Sign up our newsletter to get update information, news and free insight.</p>
                                <Link to='/signUp'>
                                    <Button
                                        label={'Sign up'}
                                    />
                                </Link>
                            </div>

                        </nav>
                    </footer>
                </Container>
            </div>
            {/* copyright section here  */}
            <div className="bg-[#1C1E2A] text-white">
                <Container>
                    <div className="flex flex-col-reverse items-center gap-4 lg:flex-row lg:text-start lg:justify-between text-center  py-9">
                        <div className="grid justify-center lg:justify-start">
                            <div className="flex gap-4">
                                <a href="#" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#8d55c5ec] ">
                                    <GrFacebookOption className="text-2xl " />
                                </a>
                                <a href="#" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#8d55c5ec] ">
                                    <IoLogoInstagram className="text-2xl " />
                                </a>
                                <a href="#" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#8d55c5ec] ">
                                    <IoLogoTwitter className="text-2xl " />
                                </a>
                                <a href="#" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#8d55c5ec] ">
                                    <FaLinkedinIn className="text-2xl " />
                                </a>
                            </div>
                        </div>
                        <span className=" text-[#94A3B8] ">
                            Copyright © 2020. All rights reserved by, ByteSkill
                        </span>
                    </div>
                </Container>
            </div>  
        </>
    );
};

export default Footer;