/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      }
    );
    return cfg;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;