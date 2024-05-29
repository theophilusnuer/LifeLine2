import { FaArrowRight } from 'react-icons/fa';
import featuredData from "../../components/rawdata/featured";
import FeaturedCard from '../../components/featuredCard';



export default function FeaturedPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6 px-2 md:px-0 md:mx-8 lg:mx-8">
                <h2 className="text-xl font-bold text-left">Featured Health Facilities</h2>
                <a href="/allfeatured" className="flex items-center text-blue-500 hover:underline">
                    See All Featured Facilities <FaArrowRight className="ml-2" />
                </a>
            </div>      <div className="flex flex-wrap justify-center gap-6">
                {featuredData.slice(0, 4).map((facility) => (
                    <FeaturedCard key={facility.id} id={facility.id} img={facility.img} name={facility.name} />
                ))}
            </div>
        </div>
    );
}