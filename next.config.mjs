/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gr-portfolio',
  assetPrefix: '/gr-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
