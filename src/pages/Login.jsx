import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setFormError("Tous les champs sont requis");
      return;
    }
    setFormError("");

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#cfd5db] via-[#bfc7cf] to-[#aeb7c1]">

      {/* Card */}
      <div className="w-full max-w-4xl h-[480px] bg-[#07121f] rounded-2xl flex overflow-hidden border border-cyan-500">

        {/* LEFT – LOGIN */}
        <div className="w-1/2 p-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8">Se connecter</h2>

          {(error || formError) && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded mb-4 text-sm">
              {formError || error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username */}
            <div className="relative">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-cyan-400"
              />
              <label className="absolute left-0 -top-4 text-gray-400 text-sm">
                Nom d'utilisateur
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-cyan-400"
              />
              <label className="absolute left-0 -top-4 text-gray-400 text-sm">
                Mot de passe
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:opacity-90 transition"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Vous n'avez pas de compte ?{" "}
            <span className="text-cyan-400 cursor-pointer">Créer un compte</span>
          </p>
        </div>

        {/* RIGHT – WELCOME */}
        <div className="w-1/2 bg-gradient-to-br from-cyan-400 to-blue-600 relative flex items-center justify-center">

          <div className="absolute inset-0 bg-[#07121f] clip-path-diagonal"></div>

          <div className="relative z-10 text-white text-center px-10">
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur SHAPIO Market</h1>
            <p className="text-sm opacity-80">
              Votre boutique en ligne.
            </p>
          </div>
        </div>

      </div>

      {/* Diagonal shape */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 70% 0, 40% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
