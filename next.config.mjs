/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enabling React Strict Mode to highlight potential issues in the application
  reactStrictMode: true,
  images: {
    // Disabling Next.js image optimization
    unoptimized: true,
  },
  // Defining redirect rules
  redirects: [
    {
      // Redirect from /admin to /admin/home
      source: '/admin',
      destination: '/admin/home',
      permanent: true, // This is a permanent redirect
    }
  ]
};

export default nextConfig;
