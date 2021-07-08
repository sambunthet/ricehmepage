import {getImageLink, appendUrl} from "$/utils/image";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = process.env.LOCALE;

const defaultConfig = {
    offset: 0,
    limit: 200,
    recipePath: '/recipes',
    countPath: '/count',
}

function getRecipeUrl(id) {
  const recipeUrl = `/recipe/${id}`;
  return recipeUrl;
}

function parseRecipe(recipe)  {
  const {id, image, description} = recipe;
  recipe.link = getRecipeUrl(id);
  recipe.image = getImageLink(image);
  recipe.description = appendUrl(description);
  return recipe;
}

export async function getRecipes({limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const data = await fetch(`${url}${defaultConfig.recipePath}?_locale=${locale}&_sort=published_at:DESC&_limit=${limit}&_start=${offset}`);
  const parsedData = await data.json();
  const recipes = parsedData.map(e=>parseRecipe(e));
  return recipes;
}

export async function getFeaturedRecipe() {
  return await getRecipes({limit:3});
}

export async function getRecipe(recipeId) {
  const data = await fetch(`${url}${defaultConfig.recipePath}/${recipeId}?_locale=${locale}`);
  const parsedData = await data.json();
  const recipe = parseRecipe(parsedData);
  return recipe;
}

export async function getRecipeCount() {
    const count = await fetch(`${url}${defaultConfig.recipePath}${defaultConfig.countPath}`);
    return await count.json();
}