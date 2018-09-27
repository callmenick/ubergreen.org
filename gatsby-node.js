const path = require('path');

exports.onCreateWebpackConfig = function({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.jsx', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
