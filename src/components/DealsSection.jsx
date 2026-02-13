import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
    { id: 1, name: "Fossil CH2927 Briggs", category: "Analog Watch", price: 3990, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 2, name: "BPL 108cm (43)", category: "Ultra HD 4K Smart LED TV", price: 13990, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500" },
    { id: 3, name: "Dolphin Fabric Sofa", category: "3+2 Seater Brown Sofa", price: 32999, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500" },
    { id: 4, name: "HP DeskJet", category: "Ink Tank Printer", price: 13990, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500" },
];

const ProductCard = ({ product }) => (
    <div className="flex-shrink-0 w-44 sm:w-48 md:w-56 lg:w-60 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 md:p-5 group">
        <div className="h-36 sm:h-40 flex items-center justify-center mb-3 overflow-hidden">
            <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain group-hover:scale-105 transition duration-300"
            />
        </div>
        <h3 className="font-semibold text-sm sm:text-base text-gray-800 truncate">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
        </div>
        <p className="text-lg sm:text-xl font-bold text-gray-900">${product.price.toLocaleString()}</p>
    </div>
);

export default function DealsSection() {
    const scrollRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(8 * 3600 + 32 * 60 + 29);
    const [isHovered, setIsHovered] = useState(false);

    // Countdown
    useEffect(() => {
        const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${h} : ${m} : ${s}`;
    };

    // Auto-scroll desktop
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animation;
        const scrollStep = () => {
            if (!isHovered) {
                container.scrollLeft += 1;
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0;
                }
            }
            animation = requestAnimationFrame(scrollStep);
        };

        animation = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(animation);
    }, [isHovered]);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth * 0.8;
        direction === "left" ? (container.scrollLeft -= scrollAmount) : (container.scrollLeft += scrollAmount);
    };

    return (
        <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-10 px-4 sm:px-6 md:px-8 rounded-3xl shadow-xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">

                {/* LEFT SIDE */}
                <div className="text-white w-full md:w-1/4 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Offres <br /> du jour</h2>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-lg font-mono tracking-widest inline-block">
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                    className="relative w-full md:w-3/4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left button - desktop only */}
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition z-10"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Products container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="snap-start">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Right button - desktop only */}
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition z-10"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
