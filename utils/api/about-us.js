const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = process.env.LOCALE;

const defaultConfig = {
    aboutPath: '/about-us'
}

export async function getAboutUs() {
  const about = await fetch(`${url}${defaultConfig.aboutPath}?_locale=${locale}`);
  return await about.json();
}