import React from "react";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 mt-20 py-12">
      {/* Основной текст */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
          О нас
          <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Прочерк */}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Мы стремимся к совершенству, создавая качественные продукты и сервисы. 
          Наши достижения говорят сами за себя. Узнайте больше о наших наградах и признании.
        </p>
      </section>

      {/* Блок с наградами */}
      <section>
        <h3 className="text-3xl font-bold text-blue-800 mb-2 text-center relative inline-block">
          Награды
          <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Прочерк */}
        </h3>

        {/* Первая награда */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3 relative inline-block">
              Премия за инновации 2024
              <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Прочерк */}
            </h4>
            <p className="text-gray-600">
              В 2024 году наша компания была удостоена премии за лучшие инновационные решения в сфере технологий.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">ФОТО</span>
            </div>
          </div>
        </div>

        {/* Вторая награда (с фото слева) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3 relative inline-block">
              Лучшая компания года
              <div className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gray-400"></div> {/* Прочерк */}
            </h4>
            <p className="text-gray-600">
              Мы получили престижную награду как одна из лучших компаний, показавших высокий уровень профессионализма и достижений.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">ФОТО</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
