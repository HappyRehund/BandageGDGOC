import Image from "next/image";
import StarRating from "./StarRating";

const ProductCard = ({ productId, productName, productDesc, productPrice, productImage, productRating }) => {
    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            {/* Gambar */}
            <div className="relative h-64 w-full">
                <Image
                    src={productImage}
                    alt={productName}
                    fill
                    className="object-cover"
                />
            </div>
            {/* Informasi */}
            <div className="flex flex-col justify-between flex-grow">
                <div className="px-4 pt-2 flex flex-col justify-start flex-grow">
                    <a href={`/products/${productId}`}>
                        <h2 className="text-lg mb-1 font-bold">{productName}</h2>
                    </a>
                </div>
                <div className="px-4 pb-2 flex flex-col justify-end flex-grow">
                    <p className="text-sm mb-2">{productDesc}</p>
                    <div className="mb-2 flex items-center gap-2">
                        <StarRating className="text-sm" rating={productRating} />
                        <p className="text-justify font-semibold text-sm mb-[0.25px]">{productRating} / 5</p>
                    </div>
                    <p className="text-primary font-semibold text-lg">{productPrice}</p>
                </div>
                <div className="px-4 pb-4 flex">
                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;