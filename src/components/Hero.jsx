import { useState, useEffect } from "react";

const slides = [
    {
        title: "Surface Pro",
        description:
            "Faites vos achats en ligne en toute simplicité – vos produits préférés, livrés rapidement chez vous.",
        image: "/src/assets/images/surface.jpg",
    },
    {
        title: "MacBook Pro",
        description: "Powerful performance for professionals.",
        image: "/src/assets/images/Mac 2.jpg",
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative bg-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                {/* Texte + Bouton */}
                <div className="md:w-1/2 w-full max-w-xl transition-all duration-700">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {slides[current].title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slides[current].description}</p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                        Acheter maintenant
                    </button>
                </div>

                {/* Images */}
                <div className="md:w-1/2 w-full mt-10 md:mt-0 h-[300px] overflow-hidden relative flex-shrink-0">
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.image}
                                alt={slide.title}
                                className="w-full flex-shrink-0 h-full object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Flèches */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
            >
                ›
            </button>
        </section>
    );
};

export default Hero;
