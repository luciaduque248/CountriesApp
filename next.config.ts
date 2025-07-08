/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/CountriesApp' : '',
  assetPrefix: isProd ? '/CountriesApp/' : '',
};

export default nextConfig;
