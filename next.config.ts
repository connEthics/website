import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
