export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Connexion
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 border rounded-xl"
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full mb-6 px-4 py-2 border rounded-xl"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
}
