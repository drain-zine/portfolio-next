const { getDataPaths } = require('./src/utils/getDataPaths');
module.exports = {
  reactStrictMode: true,
  env: { 
    paths: getDataPaths()
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  }
}
