// our-domain/
import Footer from '$/components/Footer';
import ImageNoodle from '$/components/image-noodle';
import Recipes from '$/components/recipes';
import About from '$/components/aboutUs';
import Feature from "$/components/feature";
import Hero from "$/components/hero";
import OurBrand from "$/components/ourBrand";
import { useState } from "react";
import { getAboutUs} from '$/utils/api/about-us';
import { getBrand} from '$/utils/api/our-brand';



export async function getStaticProps() {
  const [about, brand] = await Promise.all([getAboutUs(), getBrand()]);
  return {
    props: {
      about,
      brand,
    },
  }
}

function HomePage({about, brand}) {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return ( <div className="font-body">
    {/* <Navbar /> */}
    <Hero />
    <About {...about}/>
    <Feature />
    <Recipes />
    <OurBrand {...brand}/>
    <ImageNoodle />
    {/* <Footer /> */}
    </div>
  );
}

export default HomePage;