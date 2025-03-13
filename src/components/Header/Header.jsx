import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { imgImports } from "../../assets";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <header className={`fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md transition-transform duration-500 z-50 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
              }`}
            >
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <Link to="/" className="block transition-transform transform hover:scale-105">
          <img src={imgImports.Choice} className="h-20" alt="Medal" />
        </Link>
        <nav className="flex gap-10">
          <Link to="/" className="text-sm px-4 py-2 bg-blue-950 hover:bg-blue-900 transition rounded-md">
            Главная
          </Link>
          <Link to="/about" className="text-sm px-4 py-2 bg-blue-950 hover:bg-blue-900 transition rounded-md">
            О нас
          </Link>
          <Link to="/awards" className="text-sm px-4 py-2 bg-blue-950 hover:bg-blue-900 transition rounded-md">
            Награды
          </Link>
        </nav>
      </div>
    </header>

  );
};

export default Header;
