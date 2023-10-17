"use client";

import { useState } from "react";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-primary-color p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold text-white">
            Tu Socio Digital
          </div>
          <div className="lg:flex hidden space-x-4">
            <a
              href="#que-hacemos"
              className="hover:underline hover:text-hover-color"
            >
              Qué hacemos
            </a>
            <a
              href="#como-lo-hacemos"
              className="hover:underline hover:text-hover-color"
            >
              Cómo lo hacemos
            </a>
            <a
              href="#contacto"
              className="hover:underline hover:text-hover-color"
            >
              Contacto
            </a>
            <a
              href="#equipo"
              className="hover:underline hover:text-hover-color"
            >
              Equipo
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="bg-primary-color p-4 text-white lg:hidden">
          <ul className="space-y-4">
            <li>
              <a
                href="#que-hacemos"
                className="hover:underline hover:text-hover-color"
              >
                Qué hacemos
              </a>
            </li>
            <li>
              <a
                href="#como-lo-hacemos"
                className="hover:underline hover:text-hover-color"
              >
                Cómo lo hacemos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:underline hover:text-hover-color"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#equipo"
                className="hover:underline hover:text-hover-color"
              >
                Equipo
              </a>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Home;
