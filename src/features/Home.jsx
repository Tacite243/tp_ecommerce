export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-4">
            <div className="text-center text-white max-w-xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Bienvenue sur <span className="text-yellow-300">FakeStore Pro</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 mb-8">
                    Découvrez des produits de qualité au meilleur prix, en toute simplicité.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                        Voir les produits
                    </button>

                    <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    );
}
