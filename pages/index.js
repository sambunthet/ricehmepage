// our-domain/
import Footer from '../components/Footer';
import ImageNoodle from '../components/image-noodle';
import Recipes from '../components/recipes';
import About from '../components/aboutUs';
import Feature from "../components/feature";
import Header from "../components/header";

function HomePage() { 
  return ( <div>
    <Header />
    <Feature />
    <About />
    <Recipes />
    <ImageNoodle />
    <Footer />
    </div>
  );


}

export default HomePage;