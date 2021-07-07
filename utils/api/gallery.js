const url = "https://cms.devcorp.me";

const defaultConfig = {
    galleryPath: '/gallery-single'
}

export async function getGallery() {
  const about = await fetch(`${url}${defaultConfig.galleryPath}`);
  return await about.json();
}