/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aladdin-bucket0.s3.amazonaws.com',
        pathname: '/**', // Adjust pathname as needed
      },
    ],
  },
}

module.exports = nextConfig;
