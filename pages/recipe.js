
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getRecipes} from"$/utils/api/recipe";
import truncate from "truncate-html";
import useTranslation from 'next-translate/useTranslation';
const _ = require("lodash");




export async function getStaticProps({locale}) {
  const recipes = await  getRecipes({locale});

  return {
    props: {recipes},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}


const Recipe = ({recipes}) => {
  const { t } = useTranslation('common');
  if (!recipes || recipes.length === 0)
        return <div></div>;

  const getDescription = (description, length) => {
        const desc = truncate(description, {
              length: length,
              decodeEntities: true,
              stripTags: true,
              reserveLastWord: true,
      });
  
      return desc;  
  }       

  const date = (date) => new Date(date).toLocaleDateString();


  const chunk =  recipes.length > 2 ? _.chunk(recipes, 2) : _.chunk(recipes, 1);
  const list0 = chunk[0];
  const list1 = chunk[1] || [];
  const readMore = t("readMore");
    return (
    <div className="mt-32 p-0 md:px-60">

<div className="text-black text-4xl text-center pb-5 font-bold">{t("recipes")}</div>
    <div className= { list1.length > 0 ? "grid grid-cols-1 md:grid-cols-2 gap-2" : "grid grid-cols-1 md:grid-cols-1 gap-2"}>
      <div>
          

          {list0.map((recipe, index)=>
                    <Link href={`${recipe.link}`} key={index}>
                        <a>
                          <div className="p-2 bg-white">
                          <img
                                className="rounded-lg w-full"
                                src={recipe.image}
                              />


                              <h1 className="mt-4 font-bold  text-xl capitalize">
                              {recipe.title}
                              </h1>

                              <p className="text-xs	 mt-2">
                                {date(recipe.published_at)}
                              </p>
                              <div className="max-w-full">
                                <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                                {getDescription(recipe.description, index % 2 === 0 ? 150 : 100)}
                                </p>
                              </div>

                              <a className="text-base mt-4 font-medium tracking-wide text-gray-800">
                                <p className="text-center sm:text-left text-yellow-500">
                                  {readMore} <span className="">&#8594;</span>
                                </p>
                              </a>
                            
                          </div>
                        </a>
                    </Link>
                )}

      </div>
      <div>
      <div className="bg-white">
      {list1.map((recipe, index)=>
                    <Link href={`${recipe.link}`} key={index}>
                        <a>
                          <div className="p-2 bg-white">
                          <img
                                className="rounded-lg w-full"
                                src={recipe.image}
                              />


                              <h1 className="mt-4 font-bold text-xl capitalize">
                              {recipe.title}
                              </h1>

                              <p className="text-xs	 mt-2">
                                {date(recipe.published_at)}
                              </p>


                              <div className="max-w-full">
                                <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                                {getDescription(recipe.description, index % 2 === 0 ? 100 : 150)}
                                </p>
                              </div>

                              <a className="text-base mt-4 font-medium tracking-wide text-gray-800">
                                <p className="text-center sm:text-left text-yellow-500">
                                  {readMore} <span className="">&#8594;</span>
                                </p>
                              </a>
                            
                          </div>
                        </a>
                    </Link>
                )}
            
      </div>
      </div>
    </div>
    </div>
      );
}

export default Recipe;