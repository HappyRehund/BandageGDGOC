"use client";
import ProductCard from "@/components/features/ProductCard";
import Path from "@/components/layout/Path";
import { Products } from "@/utils/mockData/data";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { MdOutlineSearch } from "react-icons/md";

const ProductsPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
    const [filteredProducts, setFilteredProducts] = useState(Products);

    useEffect(() => {
        const term = searchParams.get("term") || "";
        setSearchTerm(term);
    }, [searchParams]);

    useEffect(() => {
        const filtered = Products.filter((product) =>
            product.name.toLowerCase().startsWith(debouncedSearchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [debouncedSearchTerm]);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchTerm) params.set("term", searchTerm);
        router.push(`/searchpage?${params.toString()}`);
    };

    return (
        <div className="mb-20">
            <Path />
            <div className="flex mx-10 md:ml-28 flex-col md:flex-row gap-6 md:mr-10">
                <aside className="w-full md:w-1/4 bg-white max-h-screen px-14 py-10 rounded-md shadow-md">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    {/* Filters content */}
                    {/* Filter by Location */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Location</h3>
                        <select className="w-full border rounded-md px-4 py-2">
                            <option value="">All Locations</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Surabaya">Surabaya</option>
                            <option value="Bandung">Bandung</option>
                        </select>
                    </div>

                    {/* Filter by Rating */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Rating</h3>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="Min"
                                className="w-1/2 border rounded-md px-4 py-2"
                            />
                            <input
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="Max"
                                className="w-1/2 border rounded-md px-4 py-2"
                            />
                        </div>
                    </div>

                    {/* Filter by Price */}
                    <div>
                        <h3 className="font-semibold mb-2">Price Range</h3>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                className="w-1/2 border rounded-md px-4 py-2"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                className="w-1/2 border rounded-md px-4 py-2"
                            />
                        </div>
                    </div>
                </aside>
                <main className="flex-1">
                    <h1 className="text-2xl font-bold mb-4">Search Products</h1>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products"
                            className="border border-secondary rounded-md px-4 py-2 w-full md:w-1/2"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-sky-600 flex items-center justify-center"
                        >
                            <MdOutlineSearch />
                        </button>
                    </div>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
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
                    ) : (
                        <p className="text-primary">Sorry, no products found.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;
