import { getCurrentLocale } from "$/utils/localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    aboutPath: '/about-us'
}

export async function getAboutUs(locale) {
  const about = await fetch(`${url}${defaultConfig.aboutPath}?_locale=${locale}`);
  return await about.json();
}