import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // Import du AuthContext
import { FaShoppingCart, FaStore, FaUser, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth(); // Récupération du user et logout

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaStore className="text-indigo-600" />
          MyStore
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium hidden sm:block">
            Accueil
          </Link>

          {/* Gestion Authentification */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-indigo-600 flex items-center gap-1">
                <FaUser /> {user.username}
              </span>
              <button 
                onClick={logout}
                className="text-gray-500 hover:text-red-500 transition"
                title="Déconnexion"
              >
                <FaSignOutAlt size={20} />
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Connexion
            </Link>
          )}

          {/* Panier */}
          <div className="relative">
            <Link to="/cart" className="text-2xl text-gray-700 hover:text-indigo-600 transition">
              <FaShoppingCart />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;