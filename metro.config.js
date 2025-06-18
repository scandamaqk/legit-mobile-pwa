// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  // Agrega html a las extensiones de asset
  config.resolver.assetExts.push('html');
  return config;
})();
