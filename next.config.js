global.locale = 'en'; // en | km | zh
global.apiEndPoint = process.env.PUBLIC_REST_API_ENDPOINT;

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["assets.vercel.com", "rice.com.kh", 'cdn.shopify.com'],
  },
  env: {
    LOCALE: global.locale,
    PUBLIC_REST_API_ENDPOINT: global.apiEndPoint
  },
  experimental: {
    scrollRestoration: true,
  },
};