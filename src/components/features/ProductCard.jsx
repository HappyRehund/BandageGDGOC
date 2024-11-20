"use client"
import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const ProductCard = ({ productId, productName, productDesc, productPrice, productImage, productRating }) => {
    const [isImageLoading, setIsImageLoading] = useState(true); 

    const handleImageLoad = () => setIsImageLoading(false); 

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            {/* Gambar */}
            <div className="relative h-64 w-full">
                {isImageLoading && (
                    <Skeleton className="h-full w-full rounded-lg" />
                )}
                <Image
                    src={productImage}
                    alt={productName}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                        isImageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad} 
                />
            </div>
            {/* Informasi */}
            <div className="flex flex-col justify-between flex-grow">
                <div className="px-4 pt-2 flex flex-col justify-start flex-grow">
                    <Link href={`/products/${productId}`}>
                        <h2 className="text-lg mb-1 font-bold">
                            {isImageLoading ? <Skeleton width="60%" /> : productName}
                        </h2>
                    </Link>
                </div>
                <div className="px-4 pb-2 flex flex-col justify-end flex-grow">
                    <p className="text-sm mb-2">
                        {isImageLoading ? <Skeleton width="80%" /> : productDesc}
                    </p>
                    <div className="mb-2 flex-col md:flex items-center md:gap-2">
                        {isImageLoading ? (
                            <Skeleton width="40%" />
                        ) : (
                            <>
                                <StarRating className="text-sm" rating={productRating} />
                                <p className="mx-[0.15rem] mt-1 text-justify font-semibold text-sm mb-[0.25px]">
                                    {productRating} / 5
                                </p>
                            </>
                        )}
                    </div>
                    <p className="text-primary font-semibold text-lg">
                        {isImageLoading ? <Skeleton width="50%" /> : productPrice}
                    </p>
                </div>
                <div className="px-4 pb-4 flex">
                    <button
                        className={`w-full bg-primary text-white py-2 rounded-md transition-colors duration-200 ${
                            isImageLoading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-secondary"
                        }`}
                        disabled={isImageLoading}
                    >
                        {isImageLoading ? <Skeleton width="100%" height="20px" /> : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
