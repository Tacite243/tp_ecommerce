import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
            {/* Zone Image */}
            <div className="h-64 p-6 flex items-center justify-center bg-gray-50 relative group">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Zone Infos */}
            <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">
                    {product.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1" title={product.title}>
                    {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <div className="flex gap-2">
                        <Link
                            to={`/product/${product.id}`}
                            className="px-3 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition"
                        >
                            Voir
                        </Link>
                        <button
                            onClick={() => addToCart(product)}
                            className="px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;