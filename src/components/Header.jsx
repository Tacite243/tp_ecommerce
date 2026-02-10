// Modifier le Header.jsx existant
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';
import CartIcon from '../Cart/CartIcon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Shopio
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
                <button className="absolute right-2 top-1.5 bg-primary-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-primary-700">
                  Search
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                <FiUser className="text-xl" />
                <span className="text-sm">Account</span>
              </button>
              
              <button className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-primary-600 relative">
                <FiHeart className="text-xl" />
                <span className="text-sm">Wishlist</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
      
      {/* Navbar sera rendu séparément dans Layout.jsx */}
    </header>
  );
};

export default Header;