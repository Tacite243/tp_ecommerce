import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Shopio</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FiFacebook />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FiTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FiInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/computers" className="text-gray-400 hover:text-white">
                  Computers & Laptops
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-gray-400 hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/gaming" className="text-gray-400 hover:text-white">
                  Gaming Consoles
                </Link>
              </li>
              <li>
                <Link to="/category/home" className="text-gray-400 hover:text-white">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="w-full btn-primary bg-primary-600 hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2026 - {new Date().getFullYear()} Shopio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;