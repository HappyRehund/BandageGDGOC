"use client";

import { FaChevronRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Path = () => {
    const pathname = usePathname(); // Mengambil path saat ini

    const getRouteInfo = () => {
        switch (pathname) {
            case "/":
                return "Home";
            case "/products":
                return "Search";
            default:
                return "Unknown Route";
        }
    };

    return (
        <div className="container mt-6 mb-8">
            <div className="flex items-center space-x-2">
                <a href="/">
                    <h2 className="text-lg font-bold">Home</h2>
                </a>
                <FaChevronRight className="text-gray-400 text-lg mt-0.5" />
                {pathname !== "/" && <h2 className="text-gray-400 text-lg font-bold">{getRouteInfo()}</h2>}
            </div>
        </div>
    );
};

export default Path;
