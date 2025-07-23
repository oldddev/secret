/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.esahubble.org",
      },
      {
        protocol: "https",
        hostname:"i.pinimg.com"
      },
    ],
  },
};

export default nextConfig;
