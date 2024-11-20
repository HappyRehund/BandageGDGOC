"use client";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const router = useRouter();

    const backNavigation = () => {
        router.back();
    };

    return (
        <div
            className="flex justify-center items-center h-screen bg-gray-100"
        >
            <div
                className={`relative flex flex-col w-full max-w-4xl overflow-hidden bg-white md:rounded-3xl shadow-2xl shadow-primary border ${isRegister ? "active" : ""
                    } justify-center items-center min-h-screen md:min-h-[80vh] mx-auto`}
            >
                <button
                    className="absolute top-6 left-6 flex items-center text-primary font-semibold hover:text-[#195D4C] transition-colors z-10"
                    onClick={backNavigation}
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                {/* Form Container */}
                <div
                    className={`flex w-full transition-transform duration-700 ${isRegister ? "-translate-x-1/2" : "translate-x-0"
                        }`}
                >
                    {/* Sign-Up Form */}
                    <div className="flex flex-col w-1/2 p-8 bg-white">
                        <form className="flex flex-col items-center">
                            <h1 className="text-xl md:text-2xl font-semibold mb-5">Create Account</h1>
                            <div className="flex space-x-3 mb-5 text-xs md:text-base">
                                <Link href="#" className="p-3 border border-gray-300 rounded-full">
                                    <FaGooglePlusG />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full">
                                    <FaFacebookF />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full">
                                    <FaGithub />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <span className="text-sm text-gray-600 mb-3">
                                or use your email for registration
                            </span>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full mb-3 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#2EAD8D]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-3 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#2EAD8D]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-5 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#2EAD8D]"
                            />
                            <button className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-md font-semibold hover:bg-[#195D4C]">
                                Sign Up
                            </button>
                        </form>
                    </div>

                    {/* Sign-In Form */}
                    <div className="flex flex-col w-1/2 p-8 bg-white">
                        <form className="flex flex-col items-center">
                            <h1 className="text-2xl font-semibold mb-5">Sign In</h1>
                            <div className="flex text-xs md:text-base space-x-3 mb-5">
                                <Link href="#" className="p-3 border border-gray-300 rounded-full hover:bg-primary hover:text-white duration-150">
                                    <FaGooglePlusG />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full hover:bg-primary hover:text-white duration-150 ">
                                    <FaFacebookF />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full hover:bg-primary hover:text-white duration-150">
                                    <FaGithub />
                                </Link>
                                <Link href="#" className="p-3 border border-gray-300 rounded-full hover:bg-primary hover:text-white duration-150">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <span className="text-sm text-gray-600 mb-3">
                                or use your email and password
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-3 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#2EAD8D]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-3 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#2EAD8D]"
                            />
                            <Link href="#" className="text-sm text-primary hover:underline mb-5">
                                Forget Your Password?
                            </Link>
                            <button className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-md font-semibold hover:bg-[#195D4C]">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>

                {/* Toggle Panel */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-primary to-[#2EAD8D] text-white flex flex-col justify-center items-center px-10 space-y-5 transition-transform duration-700 transform">
                    <h1 className="text-xl md:text-3xl font-bold text-center">
                        {isRegister ? "Welcome Back!" : "Hello, Friend!"}
                    </h1>
                    <p className="text-center text-sm md:text-base">
                        {isRegister
                            ? "Enter your personal details to stay connected with us."
                            : "Register your personal details to use all site features."}
                    </p>
                    <button
                        onClick={() => setIsRegister(!isRegister)}
                        className="px-4 py-2 md:px-6 md:py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-200"
                    >
                        {isRegister ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
