import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landingpage'
import FacilityByCategory from './pages/filteredCategories';
import AllToprated from './pages/allToprated';
import AllFeatured from './pages/allFeatured';
import FacilityDetails from './pages/details';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';
import LoginForm from './pages/login';


function App() {

  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/alltoprated', element: <AllToprated /> },
    { path: '/allfeatured', element: <AllFeatured /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/footer', element: <Footer /> },
    { path: '/login', element: <LoginForm /> },
    { path: '/category/:category', element: <FacilityByCategory /> },
    { path: '/facility/:id', element: <FacilityDetails /> },
  ]);

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App
