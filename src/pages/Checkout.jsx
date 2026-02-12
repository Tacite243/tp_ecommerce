import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // On définit les classes Tailwind ici pour ne pas les répéter partout
  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:bg-gray-50 transition duration-300";

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulation d'un appel API de paiement (ex: Stripe)
    setTimeout(() => {
      setIsProcessing(false);
      clearCart(); // Vider le panier
      navigate("/order-success"); // Redirection
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-indigo-600 px-8 py-6">
          <h1 className="text-2xl font-bold text-white">Finaliser la commande</h1>
          <p className="text-indigo-200">Total à payer : ${cartTotal}</p>
        </div>

        <form onSubmit={handlePayment} className="p-8 space-y-6">
          {/* Section Livraison */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">📍 Adresse de livraison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nom complet" required className={inputClasses} />
              <input type="text" placeholder="Adresse" required className={inputClasses} />
              <input type="text" placeholder="Ville" required className={inputClasses} />
              <input type="text" placeholder="Code Postal" required className={inputClasses} />
            </div>
          </div>

          <div className="border-t border-gray-100 my-4"></div>

          {/* Section Paiement (Fake) */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">💳 Paiement</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Numéro de carte (Fake)" className={inputClasses} />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className={inputClasses} />
                <input type="text" placeholder="CVC" className={inputClasses} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg flex justify-center items-center ${
              isProcessing ? "opacity-75 cursor-wait" : ""
            }`}
          >
            {isProcessing ? (
              <span className="animate-pulse">Traitement en cours...</span>
            ) : (
              `Payer $${cartTotal}`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;