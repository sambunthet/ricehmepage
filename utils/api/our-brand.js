const url = process.env.PUBLIC_REST_API_ENDPOINT;

const defaultConfig = {
    ourBrandPath: '/our-brands'
}

export async function getBrand(locale) {
  const brands = await fetch(`${url}${defaultConfig.ourBrandPath}`);
  return await brands.json();
}