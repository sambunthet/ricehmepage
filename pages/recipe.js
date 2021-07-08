
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getRecipes} from"$/utils/api/recipe";
import truncate from "truncate-html";


export async function getStaticProps(context) {
  const recipes = await  getRecipes();

  console.log("recipes:: ", recipes)
  return {
    props: {recipes},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}


const Recipe = ({recipes}) => {

    
    const getDescription = (description) => {
        const desc = truncate(description, {
            length: 100,
            decodeEntities: true,
            stripTags: true,
            reserveLastWord: true,
          });

        return desc;  
    }  
    return (
        <div className="relative px-8 pt-4 pb-4">
          <div className="max-w-screen-xl mx-auto">
           
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-md font-bold tracking-widest leading-loose">
              Recipes
              </div>
              <div className="border-b-2 border-primary-500 w-8"></div>
              <h1 className="font-display text-2xl font-bold my-6 text-secondary-500">
              </h1>
                <div className="max-w-screen-xl mx-auto">
                    <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {recipes.map((recipe, index) => (
                        <Link href= {`${recipe.link}`} key={index}>
                        <a>
                            <div className="flex-col group mb-8 md:mb-0">
                            <div className="relative h-64">
                                <AgilityImage
                                src={recipe.image}
                                className="rounded-t-lg"
                                layout="fill"
                                />
                            </div>
                            <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                                <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                                {recipe.title}
                                </div>
                                <div className="border-b-2 border-primary-500 w-8"></div>
                                <div className="mt-4  text-gray-600 italic font-semibold text-xs">
                                {getDescription(recipe.description)}
                                </div>
                            </div>
                            </div>
                        </a>
                        </Link>
                    ))}
                    </div>
            </div>
              
              
            </div>
          </div>
        </div>
      );
}
 
export default Recipe;