/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',     // For new images
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',     // 👈 This belongs here to fix your current error
      },
    ],
  },
};
export default nextConfig;
