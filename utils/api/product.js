import {getImageLink} from "$/utils/image";
import { getCurrentLocale } from "../localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    offset: 0,
    limit: 20,
    countPath: '/count',
    productPath: '/products',
    productTypePath: '/product-types',
    productCategoriesPath: '/product-categories'
}

function getProductUrl(id) {
    const productUrl = `/product/${id}`;
    return productUrl;
}

function parseProduct(product)  {
    const {id, gallery} = product;
    product.link = getProductUrl(id);
    product.image = getImageLink(gallery[0]);
    product.gallery = gallery.map(e=>getImageLink(e));
    return product;
}

export async function getProductType() {
    const productType = await fetch(`${url}${defaultConfig.productTypePath}?_locale=${locale}`);
    return await productType.json();
}

export async function getProductCategories() {
    const productCategories = await fetch(`${url}${defaultConfig.productCategoriesPath}?_locale=${locale}`);
    return await productCategories.json();
}

export async function getProducts({productTypeId, productCategoryId, featured, limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const data = await fetch(`${url}${defaultConfig.productPath}?_locale=${locale}&_sort=published_at:DESC&_limit=${limit}&_start=${offset}${productTypeId ? `&type.id=${productTypeId}`: ''}${productCategoryId ? `&categories.id=${productCategoryId}`: ''}${featured ? `&is_featured=${featured}`: ''}`);
  const parsedData = await data.json();
  const products = parsedData.map(e=>parseProduct(e));
  return products;
}

export async function getFeaturedProducts() {
    return await getProducts({featured: true});
}

export async function getProduct(productId) {
    const data = await fetch(`${url}${defaultConfig.productPath}/${productId}?_locale=${locale}`);
    const parsedData = await data.json();
    const product = parseProduct(parsedData);
    return product;
}

export async function getProductCount() {
    const count = await fetch(`${url}${defaultConfig.productPath}${defaultConfig.countPath}`);
    return await count.json();
}