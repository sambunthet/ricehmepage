const url = global.apiEndPoint;

const defaultConfig = {
    aboutPath: '/about-us'
}

export async function getAboutUs() {
  const about = await fetch(`${url}${defaultConfig.aboutPath}`);
  return await about.json();
}