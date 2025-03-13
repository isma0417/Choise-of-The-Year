import React from "react";

const Awards = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 mt-20 py-12">
      {/* Заголовок */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-600 mb-4 relative inline-block">
          Награды
          <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Линия */}
        </h2>
      </section>

      {/* Первая награда - Altyn Adam */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 relative inline-block">
            🏆 Altyn Adam
            <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Линия */}
          </h3>
          <p className="text-gray-600">
            Престижная награда, присуждаемая за выдающиеся достижения в своей области. 
            Обладатели этой награды получают признание за высокий вклад в развитие индустрии.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">ФОТО</span>
          </div>
        </div>
      </div>

      {/* Вторая награда - Выбор года №1 (меняем местами фото и текст) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 relative inline-block">
            🥇 Выбор года №1
            <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Линия */}
          </h3>
          <p className="text-gray-600">
            Эта награда подтверждает, что компания или продукт стали лидерами рынка по мнению 
            экспертов и потребителей, обеспечивая доверие и признание на национальном уровне.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">ФОТО</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
