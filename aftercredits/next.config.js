/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  // Note: If Turbopack infers the wrong workspace root, start dev with `npm run dev -- --webpack` to ensure
  // middleware is loaded from this package (or set `turbopack.root` to another absolute path if needed).
};

module.exports = nextConfig;
