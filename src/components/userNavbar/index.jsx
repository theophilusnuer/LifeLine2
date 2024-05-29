import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-500 text-lg font-bold">Logo</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="">Home</a>
          <a href="#aboutus" className="">About Us</a>
          <div className="relative group">
            <button className="">Categories</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
              <a href="#category1" className="block px-4 py-2 hover:bg-gray-200">Category 1</a>
              <a href="#category2" className="block px-4 py-2 hover:bg-gray-200">Category 2</a>
              <a href="#category3" className="block px-4 py-2 hover:bg-gray-200">Category 3</a>
              <a href="#category4" className="block px-4 py-2 hover:bg-gray-200">Category 4</a>
              <a href="#category5" className="block px-4 py-2 hover:bg-gray-200">Category 5</a>
            </div>
          </div>
          <a href="#contact" className="">Contact</a>
          <a
            href="#signin"
            className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="bg-blue-500 text-white px-3 py-1 text-sm rounded transition-colors duration-300 hover:bg-white hover:text-black hover:border hover:border-blue-500"
          >
            Register
          </a>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="#signin"
            className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            Sign In
          </a>
          <button className="text-gray-800" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 space-y-2">
          <a href="#home" className="block  p-2">Home</a>
          <a href="#aboutus" className="block  p-2">About Us</a>
          <div className="relative">
            <button className="block  p-2">Categories</button>
            <div className="bg-white text-black rounded shadow-lg mt-2">
              <a href="#category1" className="block px-4 py-2 hover:bg-gray-200">Category 1</a>
              <a href="#category2" className="block px-4 py-2 hover:bg-gray-200">Category 2</a>
              <a href="#category3" className="block px-4 py-2 hover:bg-gray-200">Category 3</a>
              <a href="#category4" className="block px-4 py-2 hover:bg-gray-200">Category 4</a>
              <a href="#category5" className="block px-4 py-2 hover:bg-gray-200">Category 5</a>
            </div>
          </div>
          <a href="#contact" className="block  p-2">Contact</a>
          <a
            href="#register"
            className="block bg-blue-500 text-white px-3 py-1 text-sm rounded transition-colors duration-300 hover:bg-white hover:text-black hover:border hover:border-blue-500"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
