/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
  // Three.js / drei need this so server-only modules aren't bundled into the client.
  transpilePackages: ['three'],
};
export default nextConfig;
