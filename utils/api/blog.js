import { getCurrentLocale } from "$/utils/localization";

const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = getCurrentLocale();

const defaultConfig = {
    offset: 0,
    limit: 200,
    postPath: '/posts',
    countPath: '/count',
    blogCategoryPath: '/blog-categories',
}

function parseData(data) {
  data.content = data.content;
  return data;
}

export async function getBlogCategories() {
    const blogCategories = await fetch(`${url}${defaultConfig.blogCategoryPath}?_locale=${locale}`);
    return await blogCategories.json();
}

export async function getPosts({blogCategoryId, limit=defaultConfig.limit, offset=defaultConfig.offset, locale}={}) {
  const posts = await fetch(`${url}${defaultConfig.postPath}?_locale=${locale}&_sort=published_at:DESC&_limit=${limit}&_start=${offset}${blogCategoryId ? `&category.id=${blogCategoryId}`: ''}`);
  return await posts.json();
}

export async function getPost(postId, locale) {
    const data = await fetch(`${url}${defaultConfig.postPath}/${postId}?_locale=${locale}`);
    if(data.status !== 200)
      return undefined;
    const parsedData = await data.json();
    const post = parseData(parsedData);
    return post;
  }

export async function getPostCount() {
    const count = await fetch(`${url}${defaultConfig.postPath}${defaultConfig.countPath}`);
    return await count.json();
}