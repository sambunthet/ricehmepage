// our-domain/
import Footer from '../components/Footer';
import ImageNoodle from '../components/image-noodle';
import Recipes from '../components/recipes';
import About from '../components/aboutUs';
import Feature from "../components/feature";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function HomePage() { 
  return ( <div>
    <Navbar />
    <Hero />
    <Feature />
    <About />
    <Recipes />
    <ImageNoodle />
    <Footer />
    </div>
  );


}

export default HomePage;