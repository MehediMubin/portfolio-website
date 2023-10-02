import Lottie from "lottie-react";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import programmer from "../assets/programmer.json";

const Header = () => {
    return (
        <div className="flex justify-around items-center gap-10 h-screen pl-5">
            <div className="w-4/6">
                <h1 className="uppercase text-3xl font-bold tracking-wide text-gray-800 mb-5">
                    Welcome to My <span className="text-[#FF2E00]">World</span>
                </h1>
                <p className="text-justify mb-5">
                    Hello there! I am{" "}
                    <span className="font-bold">Md. Mehedi Hasan</span>, a MERN
                    Stack developer with a strong love for creating web
                    applications that not only look amazing but also perform
                    seamlessly. Welcome to my digital showcase, where I invite
                    you to explore my world of coding and creativity.
                </p>
                <a className="btn text-[#FF2E00] hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-8 py-4 mb-5">
                    Download My CV
                </a>
                <div>
                    <h3 className="mb-3">Connect With Me</h3>
                    <a
                        className="btn text-[#0866ff] hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
                        href="https://www.facebook.com/mehedihasan.mubin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a
                        className="btn text-red-600 hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
                        href="https://www.instagram.com/___m_u_b_i_n___/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        className="btn text-[#0a66c2] hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded mr-3"
                        href="https://www.linkedin.com/in/mehedi1998/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a
                        className="btn text-[#1da1f2] hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-5 py-3 rounded"
                        href="https://twitter.com/hasanmubin98"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-4/6">
                <Lottie animationData={programmer} loop={true} />
            </div>
        </div>
    );
};

export default Header;
