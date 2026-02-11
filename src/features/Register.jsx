export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Inscription
                </h2>

                <input
                    type="text"
                    placeholder="Nom"
                    className="w-full mb-4 px-4 py-2 border rounded-xl"
                />

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

                <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                    S’inscrire
                </button>
            </form>
        </div>
    );
}
