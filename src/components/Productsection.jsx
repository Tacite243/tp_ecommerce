import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/api";   // ajuste le chemin si nécessaire


const ProductCard = ({ product }) => (
    <div className="min-w-[150px] sm:min-w-[200px] md:min-w-[220px] bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
        <div className="overflow-hidden rounded-lg">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain bg-white p-3 rounded-lg transform transition duration-300 hover:scale-105"
            />
        </div>

        <h3 className="mt-3 font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">
            {product.title}
        </h3>

        <div className="flex text-yellow-400 mt-1 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                    {i < Math.round(product.rating?.rate || 0) ? "★" : "☆"}
                </span>
            ))}
        </div>

        <p className="text-indigo-600 font-bold mt-2 text-sm sm:text-base">
            ${product.price}
        </p>
    </div>
);

export default function ProductSection() {
    const popularRef = useRef();
    const featuredRef = useRef();

    const [popularProducts, setPopularProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            // Popular = les 10 premiers
            setPopularProducts(data.slice(0, 10));

            // Featured = les produits les mieux notés
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
        if (direction === "left") ref.current.scrollLeft -= scrollAmount;
        else ref.current.scrollLeft += scrollAmount;
    };

    if (loading) {
        return (
            <div className="py-20 text-center text-lg font-semibold text-gray-500">
                Chargement des produits...
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 md:px-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">

                {/* POPULAR PRODUCTS */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            Popular Products
                        </h2>
                        <div className="flex space-x-2">
                            <button onClick={() => scroll(popularRef, "left")} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow">◀</button>
                            <button onClick={() => scroll(popularRef, "right")} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow">▶</button>
                        </div>
                    </div>

                    <div ref={popularRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2">
                        {popularProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

                {/* FEATURED PRODUCTS */}
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            Featured Products
                        </h2>
                        <div className="flex space-x-2">
                            <button onClick={() => scroll(featuredRef, "left")} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow">◀</button>
                            <button onClick={() => scroll(featuredRef, "right")} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow">▶</button>
                        </div>
                    </div>

                    <div ref={featuredRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2">
                        {featuredProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
