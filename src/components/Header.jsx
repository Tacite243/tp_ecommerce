import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight"
        >
          E-Shop
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-gray-700 hover:text-blue-600" to="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/products">
            Products
          </Link>
          <Link
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            to="/login"
          >
            Login
          </Link>
        </nav>

        {/* Mobile menu */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          ☰
        </button>
      </div>
    </header>
  );
}
