// src/pages/FacilityDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import allData from '../../components/rawdata/alldata';
import BookingForm from '../../components/bookingForm';

const FacilityDetails = () => {
    const { id } = useParams();
    const facility = allData.find(facility => facility.id === parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!facility) {
        return (
            <section className="flex flex-col min-h-screen">
                <Navbar />
                <div className="container mx-auto py-8 flex-grow px-4">
                    <p className="text-gray-500">Facility not found.</p>
                </div>
                <Footer className="mt-auto" />
            </section>
        );
    }

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 flex-grow px-4">
                <h2 className="text-xl font-bold mb-6">{facility.name}</h2>
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 w-full h-80">
                    <img src={facility.img} alt={facility.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl text-center font-bold">{facility.name}</h2>
                    </div>
                </div>
                <p className='font-bold'>{facility.name}</p>
                <p><strong>Location:</strong> {facility.location}</p>
                <p><strong>Opening Hours:</strong> {facility.hours}</p>
                <p><strong>Price:</strong> {facility.price}</p>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Reviews:</h3>
                    <p className="mt-2">"{facility.review1}"</p>
                    <p className="mt-2">"{facility.review2}"</p>
                    <p className="mt-2">"{facility.review3}"</p>
                </div>
                <div className="mt-6 flex justify-center md:justify-start">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-blue-700"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
            {isModalOpen && <BookingForm onClose={() => setIsModalOpen(false)} />}
            <Footer className="mt-auto" />
        </section>
    );
};

export default FacilityDetails;
