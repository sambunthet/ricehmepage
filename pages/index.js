// our-domain/
import Footer from '$/components/Footer';
import ImageNoodle from '$/components/image-noodle';
import Recipes from '$/components/recipes';
import About from '$/components/aboutUs';
import Feature from "$/components/feature";
import Hero from "$/components/hero";
import OurBrand from "$/components/ourBrand";
import { useState } from "react";
import { getAboutUs } from '$/utils/api/about-us';
import { getFeaturedProducts } from '$/utils/api/product';
import { getFeaturedRecipe } from '$/utils/api/recipe';
import { getBrand } from '$/utils/api/our-brand';



export async function getStaticProps() {
  const [about, brand, products, recipes] = await Promise.all([getAboutUs(), getBrand(), getFeaturedProducts(), getFeaturedRecipe()]);
  return {
    props: {
      about,
      brand,
      products,
      recipes
    },
  }
}

function HomePage({about, brand, products, recipes}) {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return ( <div className="font-body">
    <Hero />
    <About {...about}/>
    <Feature features={products}/>
    <Recipes recipes={recipes}/>
    <OurBrand {...brand}/>
    <ImageNoodle />
    </div>
  );
}

export default HomePage;