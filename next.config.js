/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.dummyjson.com',
      'fakestoreapi.com',
      'cdn.dummyjson.com',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
