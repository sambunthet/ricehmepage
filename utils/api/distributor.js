import { getCurrentLocale } from "$/utils/localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    offset: 0,
    limit: 20,
    distributorPath: '/distributors',
    countPath: '/count'
}

export async function getDistributors({limit=defaultConfig.limit, offset=defaultConfig.offset, locale}={}) {
  const distributors = await fetch(`${url}${defaultConfig.distributorPath}?_sort=published_at:DESC&_limit=${limit}&_start=${offset}&_locale=${locale}`);
  return await distributors.json();
}

export async function getDistributor(distributorId) {
  const data = await fetch(`${url}${defaultConfig.distributorPath}/${distributorId}&_locale=${locale}`);
  if(data.status !== 200)
    return undefined;
  return await data.json();
}

export async function getDistributorCount() {
    const count = await fetch(`${url}${defaultConfig.distributorPath}${defaultConfig.countPath}`);
    return await count.json();
}