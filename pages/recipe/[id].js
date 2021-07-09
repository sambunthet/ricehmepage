
import React from "react";
import { renderHTML } from "@agility/nextjs";
import { AgilityImage } from "@agility/nextjs";
import {getRecipe} from"$/utils/api/recipe";
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

export const getStaticPaths = async (context) => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const recipe = await  getRecipe(id);
  return {
    props: {recipe},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}

const RecipeDetail = ({recipe}) => {
   let embedHtml = JSON.parse(recipe.embed)?.rawData.html;
   if (embedHtml) {
    embedHtml = embedHtml.replace('height="113"', 'height="350"').replace('width="200"', 'width="100%"')
   }

    const dateStr = new Date(recipe.published_at).toLocaleDateString();
    
    return (
        <div className="relative px-8 pt-4 pb-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="h-64 md:h-96 relative">
              <AgilityImage
                src={recipe.image}
                className="rounded-lg"
                layout="fill"
              />
            </div>
            <div className="max-w-2xl mx-auto mt-4">
              
              <div className="border-b-2 border-primary-500 w-8"></div>
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                {dateStr}
              </div>
              <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
                {recipe.title}
              </h1>
              <ReactMarkdown remarkPlugins={[gfm]} children={recipe.description} />

              {
                embedHtml ? <div>
                <h1 className="font-display text-2xl font-bold my-6 text-secondary-500">
                  Video
                </h1>
                <div
                  className="prose max-w-full"
                  dangerouslySetInnerHTML={renderHTML(embedHtml)}
                />
                </div> : null
              }
              
            </div>
          </div>
        </div>
      );
}
 
export default RecipeDetail;