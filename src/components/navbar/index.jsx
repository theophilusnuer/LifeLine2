import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-blue-500 text-lg font-bold">LifeLine</a>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="">Home</a>
          <HashLink to='/#aboutus'>
            <p className="">About Us</p>
          </HashLink>
          <div className="relative group">
            <button className="">Categories</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
              <Link to="/category/Laboratory" className="block px-4 py-2 hover:bg-gray-200">Laboratory</Link>
              <Link to="/category/Surgical" className="block px-4 py-2 hover:bg-gray-200">Surgical</Link>
              <Link to="/category/Dental" className="block px-4 py-2 hover:bg-gray-200">Dental</Link>
              <Link to="/category/Ear, Nose & Throat" className="block px-4 py-2 hover:bg-gray-200">Ear, Nose & Throat</Link>
              <Link to="/category/Pediatrics" className="block px-4 py-2 hover:bg-gray-200">Pediatrics</Link>
            </div>
          </div>
          <HashLink to='/#footer'>
            <p className="">Contact</p>
          </HashLink>
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
          <a href="/" className="block  p-2">Home</a>
          <a href="#aboutus" className="block  p-2">About Us</a>
          <div className="relative">
            <button className="block  p-2">Categories</button>
            <div className="bg-white text-black rounded shadow-lg mt-2">
              <Link to="/category/Laboratory" className="block px-4 py-2 hover:bg-gray-200">Laboratory</Link>
              <Link to="/category/Surgical" className="block px-4 py-2 hover:bg-gray-200">Surgical</Link>
              <Link to="/category/Dental" className="block px-4 py-2 hover:bg-gray-200">Dental</Link>
              <Link to="/category/Ear, Nose & Throat" className="block px-4 py-2 hover:bg-gray-200">Ear, Nose & Throat</Link>
              <Link to="/category/Pediatrics" className="block px-4 py-2 hover:bg-gray-200">Pediatrics</Link>
            </div>
          </div>
          <a href="/#footer" className="block  p-2">Contact</a>
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

export default Navbar;
