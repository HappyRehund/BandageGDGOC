"use client"
import { useState } from "react";
import { Products } from "@/utils/mockData/data";
import ProductCard from "./ProductCard";

const ITEMS_PER_PAGE = 4;

const ListProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(Products.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = Products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Grid Produk */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        productId={product.id}
                        productName={product.name}
                        productDesc={product.desc}
                        productPrice={product.price}
                        productImage={product.displayImage}
                        productRating={product.rating}
                    />
                ))}
            </div>

            {/* Navigasi Pagination */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-primary text-white"} hover:bg-secondary transition-colors`}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`px-3 py-2 rounded-md ${currentPage === index + 1 ? "bg-secondary text-white" : "bg-gray-200"} hover:bg-primary transition-colors`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300" : "bg-primary text-white"} hover:bg-secondary transition-colors`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ListProducts;
