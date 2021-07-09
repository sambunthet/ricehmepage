
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getRecipes} from"$/utils/api/recipe";
import truncate from "truncate-html";
import Recipes from '$/components/recipes';



export async function getStaticProps(context) {
  const recipes = await  getRecipes();

  return {
    props: {recipes},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}


const Recipe = ({recipes}) => {
    return (
        <div className="mt-32 px-8">
          <Recipes recipes={recipes}/>
        </div>
      );
}
 
export default Recipe;