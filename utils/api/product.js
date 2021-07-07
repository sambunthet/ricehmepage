const url = global.apiEndPoint;
const defaultConfig = {
    offset: 0,
    limit: 20,
    countPath: '/count',
    productPath: '/products',
    productTypePath: '/product-types',
    productCategoriesPath: '/product-categories'
}

export async function getProductType() {
    const productType = await fetch(`${url}${defaultConfig.productTypePath}`);
    return await productType.json();
}

export async function getProductCategories() {
    const productCategories = await fetch(`${url}${defaultConfig.productCategoriesPath}`);
    return await productCategories.json();
}

export async function getProducts({productTypeId, productCategoryId, limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const products = await fetch(`${url}${defaultConfig.productPath}?_sort=published_at:DESC&_limit=${limit}&_start=${offset}${productTypeId ? `&type.id=${productTypeId}`: ''}${productCategoryId ? `&categories.id=${productCategoryId}`: ''}`);
  return await products.json();
}

export async function getProduct(productId) {
    const product = await fetch(`${url}${defaultConfig.productPath}/${productId}`);
    return await product.json();
}

export async function getProductCount() {
    const count = await fetch(`${url}${defaultConfig.productPath}${defaultConfig.countPath}`);
    return await count.json();
}