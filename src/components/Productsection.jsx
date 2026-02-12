import { useRef } from "react";

const productsPopular = [
    { id: 1, name: "Apple MacBook Pro", price: 93990, rating: 5, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 2, name: "Acer Aspire R3", price: 24990, rating: 4, image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7" },
    { id: 3, name: "Micromax Canvas II", price: 9999, rating: 4, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
    { id: 4, name: "Acer One 10 Atom", price: 13990, rating: 4, image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: 5, name: "Acer E15 Celeron", price: 15490, rating: 5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2" },
];

const featuredProducts = [
    { id: 1, name: "Fossil Watch", price: 3990, rating: 5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { id: 2, name: "Smart TV", price: 13990, rating: 4, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6" },
    { id: 3, name: "Sofa Dolphin", price: 32999, rating: 5, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7" },
    { id: 4, name: "HP Deskjet", price: 13990, rating: 4, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" },
    { id: 5, name: "Royal Oak Table", price: 4990, rating: 4, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
];

const ProductCard = ({ product }) => (
    <div className="min-w-[150px] sm:min-w-[200px] md:min-w-[220px] bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
        <div className="overflow-hidden rounded-lg">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg transform transition duration-300 hover:scale-105"
            />
        </div>
        <h3 className="mt-3 font-semibold text-gray-800 text-sm sm:text-base">{product.name}</h3>
        <div className="flex text-yellow-400 mt-1 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < product.rating ? "★" : "☆"}</span>
            ))}
        </div>
        <p className="text-indigo-600 font-bold mt-2 text-sm sm:text-base">${product.price.toLocaleString()}</p>
    </div>
);

export default function ProductSection() {
    const popularRef = useRef();
    const featuredRef = useRef();

    const scroll = (ref, direction) => {
        if (!ref.current) return;
        const scrollAmount = ref.current.clientWidth * 0.8; // scroll 80% of container width
        if (direction === "left") ref.current.scrollLeft -= scrollAmount;
        else ref.current.scrollLeft += scrollAmount;
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 md:px-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">

                {/* POPULAR PRODUCTS */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800 text-center sm:text-left mb-4 sm:mb-0">
                            Popular Products
                        </h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => scroll(popularRef, "left")}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => scroll(popularRef, "right")}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
                            >
                                ▶
                            </button>
                        </div>
                    </div>

                    <div
                        ref={popularRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
                    >
                        {productsPopular.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

                {/* FEATURED PRODUCTS */}
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800 text-center sm:text-left mb-4 sm:mb-0">
                            Featured Products
                        </h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => scroll(featuredRef, "left")}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => scroll(featuredRef, "right")}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
                            >
                                ▶
                            </button>
                        </div>
                    </div>

                    <div
                        ref={featuredRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
                    >
                        {featuredProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
