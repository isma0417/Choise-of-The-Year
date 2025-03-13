import React from "react";

function About() {
  return (
    <section data-aos="fade-up" id="about" className="w-[90%] mx-auto my-20 text-left">
      {/* Заголовок */}
      <h2 className="text-4xl font-bold text-yellow-600 mb-6 pl-2 border-l-4 border-yellow-600">
        О нас
      </h2>

      {/* Описание */}
      <p className="text-lg text-gray-700 leading-relaxed">
        <span className="font-semibold text-gray-900">Проект «Выбор года»</span> — это 
        независимое исследование, направленное на определение лидеров рынка товаров и услуг 
        в Казахстане. Мы помогаем потребителям делать осознанный выбор, 
        основываясь не на рекламных обещаниях, а на реальном качестве продукции.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        С 2000 года мы анализируем рынок, выявляем лучшие компании 
        и награждаем их заслуженными званиями. Наши награды — это знак доверия, 
        подтвержденный экспертными оценками и мнением потребителей.
      </p>

      {/* Разделительная линия */}
    </section>
  );
}

export default About;
