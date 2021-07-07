const url = global.apiEndPoint;
const defaultConfig = {
    offset: 0,
    limit: 200,
    recipePath: '/recipes',
    countPath: '/count',
}

export async function getRecipes({limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const recipes = await fetch(`${url}${defaultConfig.recipePath}?_sort=published_at:DESC&_limit=${limit}&_start=${offset}`);
  return await recipes.json();
}

export async function getRecipe(recipeId) {
    const recipe = await fetch(`${url}${defaultConfig.recipePath}/${recipeId}`);
    return await recipe.json();
  }

export async function getRecipeCount() {
    const count = await fetch(`${url}${defaultConfig.recipePath}${defaultConfig.countPath}`);
    return await count.json();
}