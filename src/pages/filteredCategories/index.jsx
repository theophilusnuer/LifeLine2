// src/pages/FacilityByCategory.js
import React from 'react';
import { useParams } from 'react-router-dom';
import TopratedCard from '../../components/topratedCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import CategoryButtons from '../../components/categoryButtons';
import allData from '../../components/rawdata/alldata';

const FacilityByCategory = () => {
    const { category } = useParams();

    // Filter facilities by the selected category
    const filteredFacilities = allData.filter(facility => facility.category === category);

    return (
        <section className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 px-4 flex-grow">
                <div className='mt-16'>
                    <CategoryButtons />
                </div>
                <h2 className="text-xl font-bold mb-6">Facilities in {category}</h2>
                {filteredFacilities.length === 0 ? (
                    <p className="text-gray-500">No facilities available. Check back later.</p>
                ) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredFacilities.map((facility) => (
                        <TopratedCard key={facility.id} id={facility.id} img={facility.img} name={facility.name} />
                    ))}
                </div>)}
            </div>
            <Footer className="mt-auto" />
        </section>
    );
};

export default FacilityByCategory;
