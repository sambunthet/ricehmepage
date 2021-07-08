const url = process.env.PUBLIC_REST_API_ENDPOINT;

const defaultConfig = {
    ourBrandPath: '/our-brands'
}

export async function getBrand() {
  const brands = await fetch(`${url}${defaultConfig.ourBrandPath}`);
  return await brands.json();
}