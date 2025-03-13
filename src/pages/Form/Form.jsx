import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    alert("Заявка отправлена!");
  };

  return (
    <div className="max-w-[600px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Заявка на участие</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Название компании */}
        <div>
          <label className="block font-semibold">Название компании</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Контактное лицо */}
        <div>
          <label className="block font-semibold">Контактное лицо</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Телефон */}
        <div>
          <label className="block font-semibold">Телефон</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Веб-сайт */}
        <div>
          <label className="block font-semibold">Веб-сайт (если есть)</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Категория участия */}
        <div>
          <label className="block font-semibold">Категория участия</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="">Выберите категорию</option>
            <option value="Лучший бренд">Лучший бренд</option>
            <option value="Инновации">Инновации</option>
            <option value="Социальная ответственность">Социальная ответственность</option>
          </select>
        </div>

        {/* Сообщение */}
        <div>
          <label className="block font-semibold">Дополнительная информация</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
