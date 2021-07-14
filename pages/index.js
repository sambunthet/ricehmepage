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
import { getHome } from '$/utils/api/homepage';




export async function getStaticProps({ locale }) {
  const [about, brand, products, recipes, home] = await Promise.all([getAboutUs(locale), getBrand(locale), getFeaturedProducts(locale), getFeaturedRecipe(locale), getHome(locale)]);
  return {
    props: {
      about,
      brand,
      products,
      recipes,
      home,
    },
  }
}

function HomePage({about, brand, products, recipes, home}) {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return ( <div className="font-body">
    <Hero home={home} />
    <About {...about}/>
    <Feature features={products} home={home} />
    <Recipes recipes={recipes}/>
    <OurBrand {...brand}/>
    <imgNoodle home={home} />
    </div>
  );
}

export default HomePage;
