const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = 'metro-minify-uglify';
config.transformer.minifierConfig = {
  // Options: https://github.com/mishoo/UglifyJS#compress-options
};

module.exports = config;
