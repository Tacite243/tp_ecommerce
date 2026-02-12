import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
         <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Routes>
              {/* Route Publique : Le Login */}
              <Route path="/login" element={<Login />} />

              {/* Routes Protégées (Nécessitent un compte) */}
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
              </Route>

              {/* Redirection par défaut : N'importe quelle URL inconnue renvoie vers "/" (qui renverra vers login si pas connecté) */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
      </Router>
    </CartProvider>      
    </AuthProvider>
  );
}
