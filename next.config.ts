import path from "node:path";
import type { NextConfig } from "next";

/**
 * Shared ConnEthics Arazzo packages, vendored in `vendor/@connethics/*` by
 * `arazzo-demo/scripts/sync-shared.mjs` (never edit them by hand; re-run the
 * script, then check with `--check`). `tsconfig.json` maps the names for
 * TypeScript; the aliases below do the same for webpack (`next build`) and
 * Turbopack (`next dev`), including the `@connethics/arazzo-core` import made
 * by the vendored `arazzo-flow` bundle.
 */
const arazzoAliases = {
  "@connethics/arazzo-core": "./vendor/@connethics/arazzo-core/dist/index.js",
  "@connethics/arazzo-flow/style.css": "./vendor/@connethics/arazzo-flow/dist/style.css",
  "@connethics/arazzo-flow": "./vendor/@connethics/arazzo-flow/dist/index.js",
};

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts ((en) and (fr)): unmatched URLs use src/app/global-not-found.tsx.
    globalNotFound: true,
  },

  // Turbopack configuration for better dev experience  
  turbopack: {
    resolveAlias: arazzoAliases,
    rules: {
      '*.module.css': {
        loaders: ['css-loader'],
        as: '*.module.css',
      },
    },
  },
  
  // Webpack configuration for dev mode CSS handling
  webpack: (config, { dev, isServer }) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      ...Object.fromEntries(
        Object.entries(arazzoAliases).map(([name, target]) => [`${name}$`, path.resolve(__dirname, target)]),
      ),
    };

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
