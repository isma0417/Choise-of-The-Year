import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 mt-4">Страница не найдена</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
