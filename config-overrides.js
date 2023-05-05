// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // 절대 경로 설정 추가
  config.resolve = {
    ...config.resolve,
    alias: { ...config.resolve.alias, src: path.resolve(__dirname, 'src') },
  };

  return config;
};
