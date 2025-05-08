/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/app",
      permanent: false,
    },
  ],
};

export default nextConfig;
