import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaStore } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <header className="w-full bg-white font-sans border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

        {/* --- Logo --- */}
        <div className="flex items-center gap-6 shrink-0">
          <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaStore className="text-indigo-600" />
            MyStore
          </Link>
        </div>

        {/* --- Search Bar --- */}
        <div className="w-full md:flex-1 md:max-w-4xl order-last md:order-none mt-2 md:mt-0 md:px-8">
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-sm px-4 py-2.5 hover:border-gray-400 transition-colors shadow-sm">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-6 shrink-0">

          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-indigo-600 font-medium"
          >
            Home
          </Link>

          <div className="relative">
            <Link
              to="/cart"
              className="text-2xl text-gray-700 hover:text-indigo-600 transition"
            >
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
    </header>
  );
};

export default Navbar;
