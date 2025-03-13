import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Иконки стрелок

// Кастомная левая стрелка
const CustomPrevArrow = ({ onClick }) => (
  <div 
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-yellow-600 hover:text-yellow-800 text-3xl"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

// Кастомная правая стрелка
const CustomNextArrow = ({ onClick }) => (
  <div 
    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-yellow-600 hover:text-yellow-800 text-3xl"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

function Laureates() {
  const settings = {  
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    cssEase: 'ease-in-out', 
    prevArrow: <CustomPrevArrow />, // Используем кастомные стрелки
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="my-10 w-[90%] mx-auto relative">
      <h2 className="text-4xl font-bold text-yellow-600 mb-6 text-center">Лауреаты</h2>
      <Slider {...settings}>
        {[...Array(8)].map((_, index) => ( // 8 карточек для примера
          <div key={index} className="px-4"> {/* Увеличил отступ */}
            <div className="w-full h-80 bg-gray-300 rounded-lg flex flex-col items-center justify-center shadow-lg"> {/* Увеличил высоту */}
              <div className="w-40 h-40 bg-gray-400 rounded-full mb-4"></div> {/* Имитируем место для логотипа */}
              <span className="text-gray-600 text-lg font-semibold">Лауреат {index + 1}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Laureates;
