const url = "https://cms.devcorp.me";

const defaultConfig = {
    aboutPath: '/about-us'
}

export async function getAboutUs() {
  const about = await fetch(`${url}${defaultConfig.aboutPath}`);
  return await about.json();
}