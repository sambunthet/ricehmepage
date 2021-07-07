const url = "https://cms.devcorp.me";
const defaultConfig = {
    offset: 0,
    limit: 20,
    distributorPath: '/distributors',
    countPath: '/count'
}

export async function getDistributors({limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const distributors = await fetch(`${url}${defaultConfig.distributorPath}?_sort=published_at:DESC&_limit=${limit}&_start=${offset}`);
  return await distributors.json();
}

export async function getDistributor(distributorId) {
  const distributor = await fetch(`${url}${defaultConfig.distributorPath}/${distributorId}`);
  return await distributor.json();
}

export async function getDistributorCount() {
    const count = await fetch(`${url}${defaultConfig.distributorPath}${defaultConfig.countPath}`);
    return await count.json();
}