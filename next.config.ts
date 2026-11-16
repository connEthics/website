import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts ((en) and (fr)): unmatched URLs use src/app/global-not-found.tsx.
    globalNotFound: true,
  },

  // Turbopack configuration for better dev experience  
  turbopack: {
    rules: {
      '*.module.css': {
        loaders: ['css-loader'],
        as: '*.module.css',
      },
    },
  },
  
  // Webpack configuration for dev mode CSS handling
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Force CSS updates in development
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    return config;
  },
  async redirects() {
    return [
      {
        source: "/mui-demo",
        destination: "/services",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
