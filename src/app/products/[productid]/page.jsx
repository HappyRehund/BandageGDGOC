import { notFound } from "next/navigation";
import CarouselandDesc from "@/components/features/CarouselandDesc";
import { Products } from "@/utils/mockData/data";
import BestSellerProducts from "@/components/layout/BestsellerProducts";
import { FaArrowLeft } from "react-icons/fa6";


const ProductDetail = ({ params }) => {
    const { productid } = params;
    const product = Products.find((item) => item.id === parseInt(productid));

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto p-4 mt-8">
            <a href="/products">
                <button
                    className="relative -top-6  left-6 flex items-center text-primary font-semibold hover:text-[#195D4C] transition-colors z-10"
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
            </a>
            {/* Carousel + desc */}
            <CarouselandDesc product={product} />
            {/* Display Product lain */}
            <BestSellerProducts />
        </div>
    );
};

export default ProductDetail;
