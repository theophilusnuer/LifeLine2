import SearchBar from '../../components/search';
import HeroSlider from '../../components/hero'
import Navbar from '../../components/navbar'
import CategoryButtons from '../../components/categoryButtons';
import TopratedPage from '../topratedPage';
import Footer from '../../components/footer';
import AboutUs from '../../components/aboutUs';
import FeaturedPage from '../featuredPage';



export default function LandingPage() {
    return (
        <section>
            <Navbar />
            <HeroSlider />
            <SearchBar />
            <CategoryButtons />
            <FeaturedPage />
            <TopratedPage />
            <AboutUs />
            <Footer />
        </section>
    );
}