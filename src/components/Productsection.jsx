import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/api";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ================= PRODUCT CARD ================= */

const ProductCard = ({ product }) => (
    <div className="group min-w-[180px] sm:min-w-[220px] md:min-w-[250px] bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

        {/* Image */}
        <div className="relative overflow-hidden rounded-xl bg-gray-50">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-44 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full shadow">
                New
            </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-semibold text-gray-800 text-sm sm:text-base line-clamp-2 group-hover:text-indigo-600 transition">
            {product.title}
        </h3>

        {/* Rating */}
        <div className="flex text-yellow-400 mt-2 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                    {i < Math.round(product.rating?.rate || 0) ? "★" : "☆"}
                </span>
            ))}
            <span className="text-gray-500 ml-2 text-xs">
                ({product.rating?.count})
            </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
            <p className="text-lg font-bold text-indigo-600">
                ${product.price}
            </p>

            <button className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow-md">
                Add to Cart
            </button>
        </div>
    </div>
);

/* ================= PRODUCT SECTION ================= */

export default function ProductSection() {
    const popularRef = useRef();
    const featuredRef = useRef();

    const [popularProducts, setPopularProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setPopularProducts(data.slice(0, 10));

            const best = [...data]
                .sort((a, b) => b.rating.rate - a.rating.rate)
                .slice(0, 10);

            setFeaturedProducts(best);
            setLoading(false);
        });
    }, []);

    const scroll = (ref, direction) => {
        if (!ref.current) return;
        const scrollAmount = ref.current.clientWidth * 0.8;
        ref.current.scrollLeft +=
            direction === "left" ? -scrollAmount : scrollAmount;
    };

    if (loading) {
        return (
            <div className="py-24 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                <p className="mt-4 text-gray-500 font-medium">
                    Loading premium products...
                </p>
            </div>
        );
    }

    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* ================= POPULAR ================= */}
                <div className="mb-20 relative bg-white rounded-3xl border border-gray-200 shadow-xl p-10 hover:shadow-2xl transition-all duration-500">

                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                            Produits populaires
                        </h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                        <p className="text-gray-500 mt-4 text-sm md:text-base">
                            Les produits préférés de nos clients
                        </p>
                    </div>

                    {/* Left Button */}
                    <button
                        onClick={() => scroll(popularRef, "left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 z-10"
                    >
                        <FiChevronLeft size={22} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll(popularRef, "right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 z-10"
                    >
                        <FiChevronRight size={22} />
                    </button>

                    {/* Products */}
                    <div
                        ref={popularRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 px-10"
                    >
                        {popularProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

                {/* ================= FEATURED ================= */}
                <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl p-10 hover:shadow-2xl transition-all duration-500">

                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                            Produits en vedette
                        </h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                        <p className="text-gray-500 mt-4 text-sm md:text-base">
                            Sélection triée sur le volet et hautement notée
                        </p>
                    </div>

                    {/* Left Button */}
                    <button
                        onClick={() => scroll(featuredRef, "left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 z-10"
                    >
                        <FiChevronLeft size={22} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll(featuredRef, "right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 z-10"
                    >
                        <FiChevronRight size={22} />
                    </button>

                    {/* Products */}
                    <div
                        ref={featuredRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 px-10"
                    >
                        {featuredProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
