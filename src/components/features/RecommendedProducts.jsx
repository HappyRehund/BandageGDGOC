"use client"
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { displayHero } from "@/utils/mockData/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import StarRating from "./StarRating";
import Link from "next/link";

const RecommendedProducts = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
            {/* Carousel */}
            <div className="relative overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">
                    {displayHero.map((info) => (
                        <div
                            className="flex-[0_0_100%] relative aspect-[11/10]"
                            key={info.id}
                        >
                            <img
                                src={info.image}
                                alt={info.name}
                                className="w-full h-full object-cover max-w-[80%] max-h-[80%] mx-auto rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollPrev}
                    className="absolute left-16 top-1/3 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                    <BiChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-16 top-1/3 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                    <BiChevronRight size={24} />
                </button>
            </div>

            {/* Product Info */}
            <div className="text-left mb-12 md:mt-4">
                <h1 className="text-xl font-bold md:mb-10">RECOMMENDED PRODUCT</h1>
                <Link href={`/products/${displayHero[selectedIndex]?.id}`} >
                    <h2 className="text-2xl font-bold text-gray-800 pb-2">{displayHero[selectedIndex]?.name} </h2>
                </Link>
                <div className="mb-2 flex items-center gap-2">
                    <StarRating rating={displayHero[selectedIndex]?.rating} />
                    <span className="text-justify font-semibold text-grey text-sm mb-[0.25px]">{displayHero[selectedIndex]?.totalReviews} Reviews</span>
                </div>
                <p className="text-xl font-semibold text-green-600 pb-2">
                    ${displayHero[selectedIndex]?.price}
                </p>
                <p className="text-base text-gray-600 font-semibold pb-2">Availability : {displayHero[selectedIndex]?.inStock ? (<span className="text-sky-700 font-semibold">In Stock</span>) : (<span className="text-red-700 font-semibold">Out of Stock</span>)}</p>
                <p className="text-gray-600 pb-4">
                    {displayHero[selectedIndex]?.desc}
                </p>
                <hr />
                <div className="flex justify-start gap-4 items-center mb-4">
                    <div className=" w-8 h-8 rounded-full bg-sky-500 hover:cursor-pointer" />
                    <div className=" w-8 h-8 rounded-full bg-green-500 hover:cursor-pointer" />
                    <div className=" w-8 h-8 rounded-full bg-orange-500 hover:cursor-pointer" />
                    <div className=" w-8 h-8 rounded-full bg-black hover:cursor-pointer" />
                </div>
                <div className="flex justify-start items-center gap-4">
                    <button className="w-1/2 bg-secondary text-white py-2 rounded-md hover:bg-sky-600 transition-colors duration-200">
                        Select Options
                    </button>
                    <button className="text-2xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                        <MdOutlineShoppingCart />
                    </button>
                    <button className="text-2xl text-secondary hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
                        <MdFavoriteBorder />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default RecommendedProducts;
