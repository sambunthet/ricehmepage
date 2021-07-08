const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = process.env.LOCALE;

const defaultConfig = {
    offset: 0,
    limit: 20,
    distributorPath: '/distributors',
    countPath: '/count'
}

export async function getDistributors({limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const distributors = await fetch(`${url}${defaultConfig.distributorPath}?_sort=published_at:DESC&_limit=${limit}&_start=${offset}&_locale=${locale}`);
  return await distributors.json();
}

export async function getDistributor(distributorId) {
  const distributor = await fetch(`${url}${defaultConfig.distributorPath}/${distributorId}&_locale=${locale}`);
  return await distributor.json();
}

export async function getDistributorCount() {
    const count = await fetch(`${url}${defaultConfig.distributorPath}${defaultConfig.countPath}`);
    return await count.json();
}