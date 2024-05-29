// src/components/CategoryButtons.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButtons = () => {
  const categories = ["Laboratory", "Surgical", "Dental", "Ear, Nose & Throat", "Pediatrics"];

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/category/${category}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm mb-2 mx-1 md:px-4 md:py-2 md:text-base md:mr-2 transition-colors duration-300 hover:bg-transparent hover:text-black hover:border hover:border-blue-500"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
