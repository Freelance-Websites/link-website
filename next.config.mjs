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
    
    const tsRule = cfg.module.rules.find(
      rule => rule.test && rule.test.toString().includes('tsx?')
    );
    
  
    if (tsRule && tsRule.include) {
     
      tsRule.include = [
        ...(Array.isArray(tsRule.include) ? tsRule.include : [tsRule.include]),
        /node_modules\/decap-cms/,
        /node_modules\/@decap\/cms/,
      ];
    } else if (tsRule) {
   
      tsRule.include = [
        /node_modules\/decap-cms/,
        /node_modules\/@decap\/cms/,
      ];
    }

   
    cfg.resolve = cfg.resolve || {};
    cfg.resolve.alias = cfg.resolve.alias || {};
    
    return cfg;
  },

  // Add this to transpile the necessary packages
  transpilePackages: [
    'decap-cms-app',
    'decap-cms-core',
    'decap-cms-lib-util',
    '@decap/cms',
  ],

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