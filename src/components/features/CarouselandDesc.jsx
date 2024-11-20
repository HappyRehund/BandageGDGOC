"use client"
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { displayHero } from "@/utils/mockData/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import StarRating from "./StarRating";

const CarouselandDesc = ({ product }) => {
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

    const slides = [product.displayImage, ...product.images]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
            {/* Carousel */}
            <div className="relative overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">
                    {slides.map((image, index) => (
                        <div
                            className="flex-[0_0_100%] relative aspect-[3/2]"
                            key={index}
                        >
                            <img
                                src={image}
                                alt={`image ${index}`}
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
                <h1 className="text-xl font-bold md:mb-4">Product {product.name}</h1>
                <div className="mb-2 flex items-center gap-2">
                    <StarRating rating={product.rating} />
                    <span className="text-justify font-semibold text-grey text-sm mb-[0.25px]">{product.totalReviews} Reviews</span>
                </div>
                <p className="text-xl font-semibold text-green-600 pb-2">
                    ${product.price}
                </p>
                <p className="text-base text-gray-600 font-semibold pb-2">Availability : {product.inStock ? (<span className="text-sky-700 font-semibold">In Stock</span>) : (<span className="text-red-700 font-semibold">Out of Stock</span>)}</p>
                <p className="text-gray-600 pb-4">
                    {product.desc}
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

export default CarouselandDesc;
