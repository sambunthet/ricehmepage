// our-domain/
import Footer from '../components/Footer';
import ImageNoodle from '../components/image-noodle';
import Recipes from '../components/recipes';
import About from '../components/aboutUs';
import Feature from "../components/feature";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import OurBrand from "../components/ourBrand";
import { useState } from "react";


function HomePage() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

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

  return (<div>
    <div className="relative min-h-screen">
      {/* <!-- mobile menu bar --> */}
      <div className={`bg-primary text-gray-100 flex justify-between ${active ? "pl-64" : ""}`}>
        {/* <!-- mobile menu button --> */}
        {/* <!-- logo --> */}
        <button className={`mobile-menu-button p-4 focus:bg-green-900 ${active ? "hidden" : ""}`} onClick={handleClick}>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* <!-- sidebar --> */}
      <div className={`sidebar bg-green-600 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 ${active ? "transform -translate-x-0  transition duration-200 ease-in-out" : "transform -translate-x-full transition duration-200 ease-in-out"}`}>

        {/* <!-- logo --> */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>

        {/* <!-- nav --> */}
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Home
          </a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            About
          </a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Features
          </a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Pricing
          </a>
        </nav>
      </div>

      {/* <!-- content --> */}
      <div className={`${active ? "pl-64" : ""}`}>
        <Hero />
        <Feature />
        <About />
        <Recipes />
        <OurBrand />
        <ImageNoodle />
        <Footer />
      </div>

    </div>
  </div>
  );


}

export default HomePage;