import React from 'react';
import { Link } from 'react-router-dom';

const TopratedCard = ({ id,img, name }) => {
  return (
    <Link to={`/facility/${id}`} className="block">
      <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
        <img src={img} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TopratedCard;
