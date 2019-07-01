const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      importFrom: 'src/styles/config.screensizes.css',
    }),
    ...(env === 'production'
      ? [
          cssnano({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
