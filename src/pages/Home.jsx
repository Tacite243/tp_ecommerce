import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <ProductSection />
    </div>
  );
}
