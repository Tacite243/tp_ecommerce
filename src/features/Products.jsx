import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((p, index) => {
                    const isDiscount = index % 3 === 0; // simulation promo
                    const isNew = index % 5 === 0;

                    return (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 relative group"
                            onMouseEnter={() => setHoveredId(p.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Badge */}
                            {isDiscount && (
                                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-md z-10">
                                    -20%
                                </span>
                            )}

                            {!isDiscount && isNew && (
                                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md z-10">
                                    New
                                </span>
                            )}

                            {/* Image */}
                            <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className={`max-h-40 object-contain transition duration-300 ${hoveredId === p.id ? "scale-110" : "scale-100"
                                        }`}
                                />
                            </div>

                            {/* Title (hauteur uniforme) */}
                            <h4 className="text-sm font-semibold h-12 overflow-hidden mb-2">
                                {p.title}
                            </h4>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg font-bold text-gray-900">
                                    ${p.price}
                                </span>

                                {isDiscount && (
                                    <span className="text-sm text-gray-400 line-through">
                                        ${(p.price * 1.2).toFixed(2)}
                                    </span>
                                )}
                            </div>

                            {/* Button */}
                            <button className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition transform text-black font-semibold py-2 rounded-full shadow-sm">
                                Ajouter au panier
                            </button>

                            {/* Overlay Hover */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 rounded-2xl transition pointer-events-none"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
