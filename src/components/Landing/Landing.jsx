import React from 'react';
import { imgImports } from '../../assets'; 
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div 
      className="relative w-full h-screen flex items-center justify-start bg-cover bg-center bg-fixed px-16" 
      style={{ backgroundImage: `url(${imgImports.illBg})` }}
    >
      {/* Затемняющий слой */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Контент слева */}
      <div className="relative z-10 text-white max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-snug">
          «Свобода выбора – <br /> главное достижение  Казахстанской демократии!»
        </h1>
        <div className="w-[80%] h-[4px] bg-gradient-to-r from-yellow-500 to-yellow-700 my-8 "></div>
        <p className="text-lg text-gray-200 mb-8">
          Наш проект помогает выявлять лучшие компании и бренды, заслуживающие доверия потребителей. 
          Поддержите своих фаворитов и станьте частью престижного сообщества!
        </p>
        
        <Link 
        to="/form" 
        className="w-60 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black text-lg font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg text-center flex items-center justify-center"
        >
        Подать заявку
        </Link>
      </div>
    </div>
  );
}

export default Landing;