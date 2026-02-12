import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Commande Validée !</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Merci pour votre achat. Votre commande fictive a été traitée avec succès. Vous allez recevoir un email imaginaire sous peu.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default OrderSuccess;