// our-domain/
import Footer from '../components/Footer';
import ImageNoodle from '../components/image-noodle';
import Recipes from '../components/recipes';
import About from '../components/aboutUs';
import Feature from "../components/feature";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import OurBrand from "../components/ourBrand";

function HomePage() { 
  return ( <div>
    <Navbar />
    <Hero />
    <Feature />
    <About />
    <Recipes />
    <OurBrand />
    <ImageNoodle />
    <Footer />
    </div>
  );


}

export default HomePage;