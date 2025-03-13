import React, { useState } from 'react';
import faqData from '../../data/faqData';

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="w-[80%] mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"> {/* Контейнер стал шире */}
      <h1 className=" text-4xl font-bold text-yellow-600 mb-6 pl-2 border-l-2 border-yellow-600">
        Часто задаваемые вопросы
      </h1>

      <div className="space-y-6"> {/* Чуть больше пространства между вопросами */}
        {faqData.map((item, index) => (
          <div  key={index} className="border-b pb-4 border-gray-700">
            <div className="flex items-center space-x-4">
              <div
                className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full cursor-pointer hover:bg-gray-700 transition"
                onClick={() => handleToggle(index)}
              >
                <span className={`text-xl font-semibold text-gray-400 transition-all duration-300 ${openIndexes.includes(index) ? 'opacity-70' : 'opacity-100'}`}>
                  {openIndexes.includes(index) ? '-' : '+'}
                </span>
              </div>
              <h2
                className="text-lg font-semibold text-gray-300 cursor-pointer relative group"
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[2px]"></span>
              </h2>
            </div>
            <p
              className={`text-base text-gray-400 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openIndexes.includes(index) ? 'max-h-60' : 'max-h-0'}`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
