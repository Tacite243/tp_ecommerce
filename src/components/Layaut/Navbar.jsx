import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiShoppingBag, 
  FiMonitor, 
  FiSmartphone, 
  FiGamepad,
  FiHeart,
  FiTag,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { MdComputer, MdOutlineDevicesOther } from 'react-icons/md';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      label: 'Home',
      icon: <FiHome />,
      active: location.pathname === '/'
    },
    {
      path: '/products',
      label: 'All Products',
      icon: <FiShoppingBag />,
      active: location.pathname === '/products'
    },
    {
      path: '/category/computers',
      label: 'Computers',
      icon: <MdComputer />,
      active: location.pathname.startsWith('/category/computers')
    },
    {
      path: '/category/electronics',
      label: 'Electronics',
      icon: <FiMonitor />,
      active: location.pathname.startsWith('/category/electronics')
    },
    {
      path: '/category/mobiles',
      label: 'Mobiles',
      icon: <FiSmartphone />,
      active: location.pathname.startsWith('/category/mobiles')
    },
    {
      path: '/category/gaming',
      label: 'Gaming',
      icon: <FiGamepad />,
      active: location.pathname.startsWith('/category/gaming')
    },
    {
      path: '/category/accessories',
      label: 'Accessories',
      icon: <MdOutlineDevicesOther />,
      active: location.pathname.startsWith('/category/accessories')
    },
    {
      path: '/deals',
      label: 'Deals',
      icon: <FiTag />,
      active: location.pathname === '/deals',
      badge: 'HOT'
    },
    {
      path: '/wishlist',
      label: 'Wishlist',
      icon: <FiHeart />,
      active: location.pathname === '/wishlist'
    }
  ];

  const megaMenuCategories = [
    {
      title: 'Computers',
      items: [
        { name: 'Laptops', count: 45, path: '/category/laptops' },
        { name: 'Desktops', count: 32, path: '/category/desktops' },
        { name: 'Monitors', count: 28, path: '/category/monitors' },
        { name: 'Keyboards', count: 56, path: '/category/keyboards' },
        { name: 'Mice', count: 67, path: '/category/mice' }
      ]
    },
    {
      title: 'Electronics',
      items: [
        { name: 'Smart TVs', count: 23, path: '/category/smart-tvs' },
        { name: 'Headphones', count: 89, path: '/category/headphones' },
        { name: 'Speakers', count: 45, path: '/category/speakers' },
        { name: 'Cameras', count: 34, path: '/category/cameras' },
        { name: 'Smart Watches', count: 78, path: '/category/smart-watches' }
      ]
    },
    {
      title: 'Gaming',
      items: [
        { name: 'Consoles', count: 12, path: '/category/consoles' },
        { name: 'Games', count: 456, path: '/category/games' },
        { name: 'Controllers', count: 34, path: '/category/controllers' },
        { name: 'VR Headsets', count: 23, path: '/category/vr' },
        { name: 'Gaming Chairs', count: 45, path: '/category/gaming-chairs' }
      ]
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                      item.active
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {/* Mega Menu for Computers, Electronics, Gaming */}
                  {['/category/computers', '/category/electronics', '/category/gaming'].includes(item.path) && (
                    <div className="absolute left-0 top-full w-[800px] bg-white shadow-xl rounded-b-lg border border-gray-200 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b">
                              {category.title}
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.path}
                                    className="flex items-center justify-between text-gray-600 hover:text-primary-600 group/item"
                                  >
                                    <span className="group-hover/item:translate-x-1 transition-transform">
                                      {subItem.name}
                                    </span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                      {subItem.count}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Special Offers</h4>
                            <p className="text-sm text-gray-600">
                              Up to 50% off on selected items
                            </p>
                          </div>
                          <Link
                            to="/deals"
                            className="btn-primary px-6 py-2 text-sm"
                          >
                            View All Deals
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Navigation - Additional Links */}
            <div className="flex items-center space-x-4">
              <Link
                to="/new-arrivals"
                className="text-sm text-gray-600 hover:text-primary-600"
              >
                New Arrivals
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/best-sellers"
                className="text-sm text-gray-600 hover:text-primary-600"
              >
                Best Sellers
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/clearance"
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Clearance Sale
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary-600 text-white rounded-full shadow-lg"
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {/* Search in Mobile */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
              <FiShoppingBag className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="overflow-y-auto h-[calc(100%-140px)]">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-6 py-4 ${
                      item.active
                        ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-1 text-xs font-bold bg-red-500 text-white rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Categories */}
            <div className="px-6 py-4 border-t">
              <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {megaMenuCategories.map((category) => (
                  <div key={category.title} className="mb-3">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      {category.title}
                    </h4>
                    <ul className="space-y-1">
                      {category.items.slice(0, 3).map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-gray-600 hover:text-primary-600"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="px-6 py-4 border-t bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                24/7 Customer Support
              </p>
              <a
                href="tel:+1234567890"
                className="text-primary-600 font-medium"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;