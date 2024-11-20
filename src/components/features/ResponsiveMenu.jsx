import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu, shopSubmenu } from "@/utils/mockData/data";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MdOutlineSearch, MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";


const ResponsiveMenu = ({ open }) => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed top-15 left-0 w-full max-h-screen z-50 bg-white overflow-y-auto"
                >
                    <div className="text-xl font-semibold text-black pb-12 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {NavbarMenu.map((item) => (
                                <li key={item.id} className="w-full">
                                    {item.title === "Shop" ? (
                                        <div >
                                            <h1
                                                onClick={() =>
                                                    setIsShopOpen(!isShopOpen)
                                                }
                                                className="flex gap-2 py-1 px-3 hover:text-secondary font-semibold cursor-pointer"
                                            >
                                                {item.title}
                                                <span className="relative top-1.5 text-lg">
                                                    {isShopOpen ? (
                                                        <AiOutlineUp />
                                                    ) : (
                                                        <AiOutlineDown />
                                                    )}
                                                </span>
                                            </h1>

                                            {/* Dropdown hanya untuk Shop */}
                                            <ul
                                                className={`${isShopOpen
                                                    ? "block"
                                                    : "hidden"
                                                    } pl-4`}
                                            >
                                                {shopSubmenu.map((subItem) => (
                                                    <li key={subItem.id}>
                                                        <a
                                                            href={subItem.link}
                                                            className="block px-4 pt-8 text-lg text-black hover:text-secondary"
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="inline-block pb-1 px-3 hover:text-secondary font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    )}

                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col justify-center items-start gap-6 mt-8 ml-1">
                            <a
                                className="flex items-center gap-2 text-xl font-bold text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200"
                                href="/products"
                            >
                                <p>Search</p>
                                <MdOutlineSearch className="" />
                            </a>
                            <button className="flex items-center gap-2 text-xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                                <p>CheckOut</p>
                                <MdOutlineShoppingCart className="" />
                            </button>
                            <button className="flex items-center gap-2 text-xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                                <p>Favorites</p>
                                <MdFavoriteBorder className="" />
                            </button>
                            <div className="text-xl flex justify-center gap-2 text-secondary rounded-md border-2 border-secondary px-6 py-2 duration-200 hover:bg-secondary hover:text-white ">
                                <FaUser className="mt-[2.25px]" />
                                <a
                                    className="font-semibold border-none"
                                    href="/authpage"
                                >Login / Register
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
