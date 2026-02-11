import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Header";


const PrivateRoute = () => {
  const { user, loading } = useAuth();

  // 1. On attend que la vérification du localStorage soit finie
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-indigo-600">Chargement de la session...</div>;
  }

  // 2. Si pas d'utilisateur, on redirige vers Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Si utilisateur connecté, on affiche la Navbar et le contenu de la page demandée (Outlet)
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoute;