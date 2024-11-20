import { Products } from "@/utils/mockData/data";
import ProductCard from "./ProductCard";

const ListProducts = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Products.map((product) => (
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
    );
};

export default ListProducts;