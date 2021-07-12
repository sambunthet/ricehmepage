const url = process.env.PUBLIC_REST_API_ENDPOINT;

export const getFullUrl = (path) => {
    return `${process.env.PUBLIC_REST_API_ENDPOINT}${path}`
};

export function getImageLink(image) {
    if(!image)
        return "";
    const imageUrl = image.url;
    return imageUrl;
}

export function appendUrl(text) {
    return text.replace(/"\/uploads\//g,`"${url}/uploads/`);
}