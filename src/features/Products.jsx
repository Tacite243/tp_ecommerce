import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            {/* Titre */}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                Nos Produits
            </h2>

            {/* Grille des produits */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        {/* Nom du produit */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {p.title}
                        </h4>

                        {/* Prix */}
                        <p className="text-xl font-bold text-blue-600 mb-4">
                            {p.price} $
                        </p>

                        {/* Bouton */}
                        <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition">
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
