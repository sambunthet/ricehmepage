import { getCurrentLocale } from "$/utils/localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

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
  recipe.image = image.url;
  return recipe;
}

export async function getRecipes({limit=defaultConfig.limit, offset=defaultConfig.offset, locale}={}) {
  const data = await fetch(`${url}${defaultConfig.recipePath}?_locale=${locale}&_sort=published_at:DESC&_limit=${limit}&_start=${offset}`);
  const parsedData = await data.json();
  const recipes = parsedData.map(e=>parseRecipe(e));
  return recipes;
}

export async function getFeaturedRecipe(locale) {
  return await getRecipes({limit:3, locale: locale});
}

export async function getRecipe(recipeId, {locale}={}) {
  const data = await fetch(`${url}${defaultConfig.recipePath}/${recipeId}?_locale=${locale}`);
  if(data.status !== 200)
    return undefined;
  const parsedData = await data.json();
  const recipe = parseRecipe(parsedData);
  return recipe;
}

export async function getRecipeCount() {
    const count = await fetch(`${url}${defaultConfig.recipePath}${defaultConfig.countPath}`);
    return await count.json();
}