// src/pages/AllTopRated.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import topratedData from "../../components/rawdata/toprated";
import TopratedCard from '../../components/topratedCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const AllTopRated = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 flex-grow px-4">
                <div className="flex justify-between items-center mb-6 px-2 md:px-0 md:mx-8 lg:mx-8">
                    <h2 className="text-xl font-bold text-left">Top Rated Health Facilities</h2>
                   
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {topratedData.map((facility) => (
                        <TopratedCard key={facility.id} id={facility.id} img={facility.img} name={facility.name} />
                    ))}
                </div>
            </div>
            <Footer className="mt-auto" />
        </section>
    );
};

export default AllTopRated;
