import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import DealsSection from "../components/DealsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Hero */}
      <Hero />

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ProductSection />
      </div>

      {/* Deals Section (avant footer) */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <DealsSection />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
