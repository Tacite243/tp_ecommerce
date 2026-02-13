import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import {
  FaShoppingCart,
  FaStore,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaStore className="text-gray-800" />
          SHAPIO Market
        </Link>

        {/* Hamburger mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu desktop */}
        <div className={`sm:flex flex-col sm:flex-row sm:items-center gap-6 ${isOpen ? "flex" : "hidden"} transition-all duration-300`}>

          {/* Pages principales */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium transition">
              Accueil
            </Link>

            <div className="relative group">
              <span className="cursor-pointer text-gray-800 hover:text-gray-600 font-medium transition">
                Boutique
              </span>
              {/* Sous-menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <Link to="/products" className="block px-4 py-2 hover:bg-gray-100">Tous les produits</Link>
                <Link to="/products/electronics" className="block px-4 py-2 hover:bg-gray-100">Électronique</Link>
                <Link to="/products/fashion" className="block px-4 py-2 hover:bg-gray-100">Mode</Link>
                <Link to="/products/home" className="block px-4 py-2 hover:bg-gray-100">Maison & Jardin</Link>
                <Link to="/products/sports" className="block px-4 py-2 hover:bg-gray-100">Sports & Loisirs</Link>
                <Link to="/products/sale" className="block px-4 py-2 hover:bg-gray-100">Promotions</Link>
              </div>
            </div>

            <Link to="/offers" className="text-gray-800 hover:text-gray-600 font-medium transition">
              Offres
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 font-medium transition">
              À propos
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-gray-600 font-medium transition">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Auth et panier */}
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {user ? (
              <>
                <span className="text-sm font-semibold flex items-center gap-1">
                  <FaUser /> {user.username}
                </span>
                <button
                  onClick={logout}
                  className="text-gray-800 hover:text-red-500 transition-colors duration-300 p-2 rounded-full hover:bg-red-100"
                  title="Déconnexion"
                >
                  <FaSignOutAlt size={20} />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Connexion
              </Link>
            )}

            {/* Panier */}
            <div className="relative">
              <Link
                to="/cart"
                className="text-gray-800 text-2xl hover:text-gray-600 transition-transform duration-300"
              >
                <FaShoppingCart className="hover:scale-110 transition-transform" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg animate-pulse">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ligne séparatrice pour desktop */}
      <div className="hidden sm:block border-t border-gray-300"></div>
    </nav>
  );
};

export default Navbar;
