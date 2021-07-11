import { getCurrentLocale } from "$/utils/localization";
import { appendUrl } from "$/utils/image";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    homePath: '/homepage'
}

function parseData(home) {
  home = JSON.parse(appendUrl(JSON.stringify(home)));
  return home;
}

export async function getHome(locale) {
  const data = await fetch(`${url}${defaultConfig.homePath}?_locale=${locale}`);
  const object = await data.json();
  const home = parseData(object);
  return home;
}