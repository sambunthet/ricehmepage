const url = process.env.PUBLIC_REST_API_ENDPOINT;
const locale = process.env.LOCALE;

const defaultConfig = {
    offset: 0,
    limit: 200,
    postPath: '/posts',
    countPath: '/count',
    blogCategoryPath: '/blog-categories',
}

export async function getBlogCategories() {
    const blogCategories = await fetch(`${url}${defaultConfig.blogCategoryPath}?_locale=${locale}`);
    return await blogCategories.json();
}

export async function getPosts({blogCategoryId, limit=defaultConfig.limit, offset=defaultConfig.offset}={}) {
  const posts = await fetch(`${url}${defaultConfig.postPath}?_locale=${locale}&_sort=published_at:DESC&_limit=${limit}&_start=${offset}${blogCategoryId ? `&category.id=${blogCategoryId}`: ''}`);
  return await posts.json();
}

export async function getPost(postId) {
    const post = await fetch(`${url}${defaultConfig.postPath}/${postId}?_locale=${locale}`);
    return await post.json();
  }

export async function getPostCount() {
    const count = await fetch(`${url}${defaultConfig.postPath}${defaultConfig.countPath}`);
    return await count.json();
}