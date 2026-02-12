import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Votre panier est vide 😢</h2>
        <Link to="/" className="text-indigo-600 hover:underline">Retourner à la boutique</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mon Panier</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Liste des produits */}
        <div className="lg:w-2/3 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain bg-gray-50 rounded-md p-2" />
              
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => decreaseQuantity(item.id)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FaMinus size={10} />
                </button>
                <span className="font-bold w-4 text-center">{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FaPlus size={10} />
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Résumé de la commande */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Résumé</h2>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Sous-total</span>
              <span>${cartTotal}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Livraison</span>
              <span>Gratuit</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900 mb-6">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
            <button 
              onClick={() => navigate("/checkout")}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
            >
              Passer au paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;