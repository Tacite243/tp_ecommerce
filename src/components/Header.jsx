import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaStore } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaStore className="text-indigo-600" />
          MyStore
        </Link>

        {/* Menu & Cart */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">
            Accueil
          </Link>
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