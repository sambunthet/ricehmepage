import { getCurrentLocale } from "$/utils/localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    galleryPath: '/gallery-single'
}

export async function getGallery() {
  const about = await fetch(`${url}${defaultConfig.galleryPath}?_locale=${locale}`);
  return await about.json();
}