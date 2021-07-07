import {apiEndPoint} from"./../api"

export const getFullUrl = (path) => {
    console.log("apiEndPoint getFUll: ", `${apiEndPoint}${path}`)
    return `https://cms.devcorp.me/${path}`
};