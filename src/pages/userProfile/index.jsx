import SearchBar from '../../components/search';
import HeroSlider from '../../components/hero'
import CategoryButtons from '../../components/categoryButtons';
import UserNavbar from '../../components/userNavbar';



export default function userProfile() {

    
    return (
        <section>
            <UserNavbar />
            <HeroSlider />
            <SearchBar />
            <CategoryButtons />
        </section>
    );
}