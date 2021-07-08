export const getFullUrl = (path) => {
    return `${process.env.PUBLIC_REST_API_ENDPOINT}${path}`
};

export function getImageLink(image, {format="m"}={}) {
    if(!image)
        return "";
    const imageUrl = getFullUrl(image.formats.medium.url);
    return imageUrl;
}