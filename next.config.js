const path = require('path');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const getLocalIdent = require('css-loader/lib/getLocalIdent');
const buildtime = require('./env/buildtime');
const runtime = require('./env/runtime');

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const nextConfig = {
  env: buildtime,
  publicRuntimeConfig: Object.keys(runtime).reduce((acc, key) => {
    acc[key] = process.env[key] || runtime[key];
    return acc;
  }, {}),
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
  withImages,
  withCSS,
)(nextConfig);
