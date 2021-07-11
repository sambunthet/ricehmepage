const nextTranslate = require('next-translate')

global.locale = 'zh'; // en | km | zh
global.apiEndPoint = process.env.PUBLIC_REST_API_ENDPOINT;
global.websiteTitle = process.env.WEBSITE_TITLE;
global.websiteDescription = process.env.WEBSITE_DESCRIPTION;
global.websiteKeywords = process.env.WEBSITE_KEYWORDS;

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["assets.vercel.com", "rice.com.kh", 'cdn.shopify.com'],
  },
  env: {
    LOCALE: global.locale,
    PUBLIC_REST_API_ENDPOINT: global.apiEndPoint,
    WEBSITE_TITLE: global.websiteTitle,
    WEBSITE_DESCRIPTION: global.websiteDescription,
    WEBSITE_KEYWORDS: global.websiteKeywords
  },
  experimental: {
    scrollRestoration: true,
  },
});