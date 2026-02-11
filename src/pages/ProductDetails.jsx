import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className="text-center mt-20">Chargement...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/" className="text-indigo-600 mb-6 inline-block hover:underline">← Retour</Link>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-10 flex items-center justify-center bg-gray-50">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-sm text-indigo-500 font-bold uppercase mb-2">{product.category}</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition hover:-translate-y-1"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;