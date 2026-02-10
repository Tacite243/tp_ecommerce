import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to E-Shop
        </h1>
        <p className="text-gray-600">
          Your favorite products, all in one place.
        </p>
      </main>
      <Footer />
    </>
  );
}
