const url = process.env.PUBLIC_REST_API_ENDPOINT;

export const getFullUrl = (path) => {
    return `${process.env.PUBLIC_REST_API_ENDPOINT}${path}`
};

export function getImageLink(image, {format="m"}={}) {
    if(!image)
        return "";
    const imageUrl = getFullUrl(image.formats.medium.url);
    return imageUrl;
}

export function appendUrl(text) {
    return text.replace(/\/uploads\//g,`${url}/uploads/`);
}