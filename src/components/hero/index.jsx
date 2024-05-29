import React, { useState, useEffect } from 'react';
import SearchBar from '../search';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      url: 'https://britanniamedical.org/assets/Britannia.jpg',
      text: 'Uncompromising Care, Unmatched Expertise!',
      sub: "Get your medical needs with just a click at where you are",
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipPmAENn3JKVb9MHQWcYTvdJWj4hP3AkPvkyN5w=s680-w680-h510',
      text: 'Uncompromising Care, Unmatched Expertise!',
      sub: "Get your medical needs with just a click at where you are",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[500px]">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.url} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute w-full text-center">
            <h1 className="text-4xl font-bold">{slide.text}</h1>
            <h2 className="text-xl mt-2">{slide.sub}</h2>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 mb-2 p-12 px-4 md:px-32 left-0 w-full flex flex-col items-center">
        <SearchBar /> {/* Place the SearchBar component here */}
        <div className="flex justify-center mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 focus:outline-none ${currentSlide === index ? 'opacity-100' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
