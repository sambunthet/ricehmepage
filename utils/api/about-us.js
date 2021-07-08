const url = process.env.PUBLIC_REST_API_ENDPOINT;

const defaultConfig = {
    aboutPath: '/about-us'
}

export async function getAboutUs() {
  const about = await fetch(`${url}${defaultConfig.aboutPath}`);
  return await about.json();
}