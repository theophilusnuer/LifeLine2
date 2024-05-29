import topratedData from "../../components/rawdata/toprated";
import TopratedCard from "../../components/topratedCard";
import { FaArrowRight } from 'react-icons/fa';



export default function TopratedPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6 px-2 md:px-0 md:mx-8 lg:mx-8">
                <h2 className="text-xl font-bold text-left">Top Rated Health Facilities</h2>
                <a href="/alltoprated" className="flex items-center text-blue-500 hover:underline">
                    See All Top Rated Facilities <FaArrowRight className="ml-2" />
                </a>
            </div>      <div className="flex flex-wrap justify-center gap-6">
                {topratedData.slice(0, 4).map((facility) => (
                    <TopratedCard key={facility.id} id={facility.id} img={facility.img} name={facility.name} />
                ))}
            </div>
        </div>
    );
}