"use client";
import { NavbarMenu, shopSubmenu } from "@/utils/mockData/data";
import { MdOutlineSearch, MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import ResponsiveMenu from "../features/ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listeners
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`sticky top-0 z-50 bg-white shadow-md ${
                    isScrolled ? "shadow-lg bg-opacity-95" : "bg-transparent"
                }`}
            >
                <div className="container flex justify-between items-center py-4 lg:px-12">
                    {/* Logo section */}
                    <div className="text-2xl font-bold">
                        <p>Bandage</p>
                    </div>
                    {/* Menu section */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center md:gap-1 lg:gap-3 text-gray-600">
                            {NavbarMenu.map((item) => (
                                <li key={item.id} className="relative group">
                                    {item.title === "Shop" ? (
                                        <>
                                            <button
                                                onClick={() => setIsShopOpen(!isShopOpen)}
                                                className="flex items-center py-1 px-3 hover:text-[#23A6F0] font-semibold"
                                            >
                                                {item.title}
                                                <IoChevronDownOutline
                                                    className={`ml-2 text-lg transform transition-transform duration-300 ${
                                                        isShopOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                            {isShopOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                                                >
                                                    <ul>
                                                        {shopSubmenu.map((subItem) => (
                                                            <li key={subItem.id}>
                                                                <a
                                                                    href={subItem.link}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    {subItem.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="inline-block py-1 px-3 hover:text-[#23A6F0] font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Icons section */}
                    <div className="lg:flex lg:items-center lg:gap-4 hidden">
                        <a href="/products" className="text-2xl font-bold text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                            <MdOutlineSearch />
                        </a>
                        <button className="text-2xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                            <MdOutlineShoppingCart/>
                        </button>
                        <button className="text-2xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                            <MdFavoriteBorder/>
                        </button>
                        <div className="lg:flex lg:justify-center lg:gap-2 text-secondary rounded-md border-2 border-secondary px-6 py-2 duration-200 hidden hover:bg-secondary hover:text-white ">
                            <FaUser className="mt-[2.25px]" />
                            <a
                                className="font-semibold border-none"
                                href="/authpage"
                            >
                                Login / Register
                            </a>
                        </div>
                    </div>
                    {/* Mobile Hamburger Menu Section */}
                    <div className="flex lg:hidden">
                        <button
                            className="focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                variants={{
                                    open: { rotate: 90, x: 2, y: 2 },
                                    closed: { rotate: 0, x: 0, y: 0 },
                                }}
                                className="fixed z-100 top-5 right-4"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-gray-600 hover:text-gray-800"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 14"
                                        fill="none"
                                        className="w-6 h-6 text-gray-600 hover:text-gray-800"
                                    >
                                        <path
                                            d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z"
                                            fill="#737373"
                                        />
                                    </svg>
                                )}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Sidebar section */}
            <ResponsiveMenu open={isOpen} />
        </>
    );
};

export default Navbar;
