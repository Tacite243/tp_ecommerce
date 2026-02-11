import { Outlet, Link, NavLink } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        SHOPIO<span className="text-gray-800"> E-Shop</span>
                    </Link>

                    {/* Liens */}
                    <div className="flex gap-6 items-center">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/products", label: "Produits" },
                            { to: "/about", label: "À propos" },
                            { to: "/contact", label: "Contact" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `font-medium transition ${isActive
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        {/* Panier */}
                        <NavLink
                            to="/cart"
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                        >
                            Panier
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Contenu */}
            <main className="flex-1 bg-gray-50">
                <Outlet />
            </main>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>


            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 text-center py-4">
                © {new Date().getFullYear()} SHOPIO E-Shop — Tous droits réservés
            </footer>
        </div>
    );

}
