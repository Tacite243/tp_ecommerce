import { Link } from "react-router-dom";

export default function Header() {
  return (
      
      <header className="w-full bg-white font-sans border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

              {/* --- Partie Gauche : Logo + Menu --- */}
              <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-6 shrink-0">
                  <a href="/" className="text-2xl font-bold text-gray-500 tracking-tight">
                      Shopio
                  </a>

                  <button className="text-gray-400 hover:text-gray-600 p-1 md:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  </button>
              </div>

              {/* --- Partie Centrale : Barre de recherche --- */}
              {/* bg-white partout comme demandé */}
              <div className="w-full md:flex-1 md:max-w-4xl order-last md:order-none mt-2 md:mt-0 md:px-8">
                  <div className="flex items-center w-full bg-white border border-gray-300 rounded-sm px-4 py-2.5 hover:border-gray-400 transition-colors shadow-sm">
                      <input
                          type="text"
                          placeholder="Search products & brands"
                          className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                      />
                      <button className="text-gray-400 hover:text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                      </button>
                  </div>
              </div>

              {/* --- Partie Droite : Liens --- */}
              <div className="hidden md:flex items-center gap-6 shrink-0 text-right">
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-800 transition-colors whitespace-nowrap">
                      Download App
                  </a>
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-800 transition-colors whitespace-nowrap">
                      Sign Up / Login
                  </a>
              </div>

          </div>
      </header>
  );
}
