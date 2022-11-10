const autoprefixer = require('autoprefixer');
const cssnanoPlugin = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = ({ mode }) => {
  console.log(mode);
  const isDevelopmentMode = mode === 'development';
  return [
    postcssPresetEnv(),
    autoprefixer(),
    ...[!isDevelopmentMode && cssnanoPlugin()],
  ];
};
