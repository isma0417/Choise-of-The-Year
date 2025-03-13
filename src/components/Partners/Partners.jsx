import React from 'react';
import Slider from 'react-slick';
import partners from '../../data/cardsData'

const PartnerCarousel = () => {

  const settings = {  
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость прокрутки
    slidesToShow: 5, // Показывать 3 слайда
    slidesToScroll: 1, // Прокручивать 1 слайд
    autoplay: true, // Включаем автоматическую прокрутку
    autoplaySpeed: 2000 , // Скорость автопрокрутки (в миллисекундах)
    pauseOnHover: true, // Пауза на автопрокрутке при наведении
    cssEase: 'ease-in-out', // Плавный переход
    centerMode: true, // Центрирование активного слайда
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024, // Для экранов больше 1024px
        settings: {
          slidesToShow: 2, // Показывать 2 слайда
        },
      },
      {
        breakpoint: 600, // Для экранов меньше 600px
        settings: {
          slidesToShow: 1, // Показывать 1 слайд
        },
      },
    ],
  };

  return (
    <div className="my-10 w-[90%] mx-auto" >
      <h2 className="text-4xl font-bold text-yellow-600 mb-6 pl-2 border-l-4 border-yellow-600">Партнеры</h2>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="bg-transparent p-6 rounded-lg shadow-lg text-center ">
            <img
              src={partner.logo}
              alt={partner.name}
              className="rounded-xl mx-auto mb-4max-w-full h-auto object-contain p-0"
            />
            {/* <p className="text-xl text-yellow-500 font-semibold">{partner.name}</p>
            <p className="text-black text-xs h-28">{partner.preDescription}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
