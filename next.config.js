/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
}

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);
module.exports = config
