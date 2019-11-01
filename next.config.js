const path = require('path');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');
const getLocalIdent = require('css-loader/lib/getLocalIdent');

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const nextConfig = {
  env: {
    META_AUTHOR: 'Nick Salloum',
    META_DESCRIPTION:
      'We’re dedicated to sourcing the finest True Trinitario cacao. We team up with sustainable, small scale local farms to deliver top quality cacao to you.',
    META_TITLE: 'Ubergreen Organics – Fairly Sourced True Trinitario Cacao',
    SITE_URL: 'https://www.ubergreen.org',
  },
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    localIdentName: '[local]___[hash:base64:5]',
    getLocalIdent: function(loaderContext, localIdentName, localName, options) {
      if (loaderContext.resourcePath.includes('node_modules')) {
        return localName;
      }

      return getLocalIdent(loaderContext, localIdentName, localName, options);
    },
  },
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest),
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = 'source-map';

      for (const plugin of config.plugins) {
        if (plugin.constructor.name === 'UglifyJsPlugin') {
          plugin.options.sourceMap = true;
          break;
        }
      }

      if (config.optimization && config.optimization.minimizer) {
        for (const plugin of config.optimization.minimizer) {
          if (plugin.constructor.name === 'TerserPlugin') {
            plugin.options.sourceMap = true;
            break;
          }
        }
      }
    }

    config.resolve.modules.push(path.resolve(__dirname, 'src'));

    return config;
  },
};

module.exports = compose(
  withOffline,
  withImages,
  withCSS,
)(nextConfig);
