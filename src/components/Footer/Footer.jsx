import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Навигация + Контакты */}
        <div>
          <h3 className="text-xl font-bold mb-5">Навигация</h3>
          <ul className="space-y-3">
            {[
              { path: "/", label: "Главная" },
              { path: "/awards", label: "Награды" },
              { path: "/about", label: "О нас" },
            ].map(({ path, label }) => (
              <li key={path} className="relative w-max group">
                <Link to={path} className="text-gray-300 hover:text-white transition">
                  {label}
                </Link>
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* Разделительная линия */}
          <div className="w-full h-[2px] bg-gray-600 my-6"></div>

          {/* Контакты под навигацией */}
          <h3 className="text-xl font-bold mb-4">Контакты</h3>
          <p className="text-gray-300">
            📧 <a href="mailto:viborgoda@viborgoda.kz" className="hover:underline">viborgoda@viborgoda.kz</a>
          </p>
          <p className="text-gray-300">
            📧 <a href="mailto:1@viborgoda.kz" className="hover:underline">1@viborgoda.kz</a>
          </p>
          <p className="text-gray-300">
            📞 <a href="tel:+77272715186" className="hover:underline">+7 (727) 271 51 86</a>
          </p>
        </div>

        {/* Карта + Адрес */}
        <div>
          <div className="w-full h-[350px] border border-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0704387051233!2d76.94485068563715!3d43.22898279667437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f1c632085a7%3A0x6d1a069894a8db43!2zNCwg0L_RgC3Rgi4g0J3QsNC30LDRgNCx0LDQtdCy0LAgMjQ1LCDQkNC70LzQsNGC0YsgMDUwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1741852072763!5m2!1sru!2skg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Разделительная линия */}
          <div className="w-full h-[2px] bg-gray-600 my-6"></div>

          {/* Адрес */}
          <p className="text-gray-300">📍 Республика Казахстан, 050020, г. Алматы ул. Н. Назарбаева 245, офис 4</p>
        </div>

      </div>

      {/* Нижний копирайт */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 Выбор года. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
