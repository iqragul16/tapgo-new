import React, { useState } from "react";
import { Link } from "react-router-dom";

import france from "../../assets/france.png";
import uk from "../../assets/uk.png";
import germany from "../../assets/germany.png";
import italy from "../../assets/italy.png";

function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    code: "FR",
    flag: france,
  });

  const languages = [
    { code: "EN", flag: uk },
    { code: "GE", flag: germany },
    { code: "IT", flag: italy },
  ];

  const selectLanguage = (language) => {
    setSelectedLang(language);
    setLangOpen(false);
  };

  return (
    <>
      {/* Header */}
<header className="fixed top-0 left-0 w-full z-[10000] bg-transparent">
  <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 h-20 flex items-center justify-between box-border">          <Link
            to="/"
            className="text-2xl font-bold shrink-0"
          >
            Tapgo
          </Link>

          {/* Desktop Menu */}
<div className="hidden sm:flex items-center gap-2 lg:gap-5 xl:gap-8 min-w-0">
<nav className="flex items-center gap-2 lg:gap-5 text-sm font-medium">
             <Link
                to="/"
                className="px-3 lg:px-4 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/pricing"
                className="px-3 lg:px-4 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
              >
                Pricing
              </Link>

              <Link
                to="/kiosk"
                className="px-3 lg:px-4 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
              >
                Kiosk
              </Link>

            </nav>

            {/* Contact */}
            <Link
              to="/contact"
              className="group relative overflow-hidden h-12 bg-gradient-to-r from-pink-500 to-pink-700 text-white px-5 lg:px-6 rounded-lg inline-flex items-center justify-center shrink-0"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-10">
                Contact us
              </span>

              <span className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                Contact us
              </span>
            </Link>

            {/* Desktop Language */}
            <div className="relative shrink-0">

              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm"
              >
                <img
                  src={selectedLang.flag}
                  alt=""
                  className="w-6 h-4 object-cover"
                />

                <span>{selectedLang.code}</span>
                <span>⌄</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-10 w-24 bg-white rounded-lg shadow-xl py-2 z-[10001]">

                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => selectLanguage(language)}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={language.flag}
                        alt=""
                        className="w-5 h-4 object-cover"
                      />

                      {language.code}
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>

          {/* Mobile Right */}
<div className="flex sm:hidden items-center gap-3">
            {/* Mobile Language */}
            <div className="relative">

              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm"
              >
                <img
                  src={selectedLang.flag}
                  alt=""
                  className="w-6 h-4 object-cover"
                />

                <span>{selectedLang.code}</span>
                <span>⌄</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-9 w-24 bg-white rounded-lg shadow-xl py-2 z-[10001]">

                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => selectLanguage(language)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      <img
                        src={language.flag}
                        alt=""
                        className="w-5 h-4 object-cover"
                      />

                      {language.code}
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl sm:text-3xl leading-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
<div className="fixed top-20 left-0 right-0 w-auto bg-white/95 backdrop-blur-md shadow-lg px-4 py-5 z-[9999] sm:hidden">          <nav className="flex flex-col">

            <Link
              to="/"
              className="py-3 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/pricing"
              className="py-3 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              to="/kiosk"
              className="py-3 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Kiosk
            </Link>

            <Link
              to="/contact"
              className="mt-3 w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 rounded-lg flex items-center justify-center text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>

          </nav>

        </div>
      )}
    </>
  );
}

export default Navbar;