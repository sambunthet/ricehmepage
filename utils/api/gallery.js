const url = global.apiEndPoint;

const defaultConfig = {
    galleryPath: '/gallery-single'
}

export async function getGallery() {
  const about = await fetch(`${url}${defaultConfig.galleryPath}`);
  return await about.json();
}