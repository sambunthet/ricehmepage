const url = "https://cms.devcorp.me";

const defaultConfig = {
    ourBrandPath: '/our-brands'
}

export async function getBrand() {
  const brands = await fetch(`${url}${defaultConfig.ourBrandPath}`);
  return await brands.json();
}