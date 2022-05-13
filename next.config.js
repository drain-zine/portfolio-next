const { getDataPaths } = require('./src/utils/getDataPaths');
module.exports = {
  reactStrictMode: true,
  env: { 
    paths: getDataPaths()
  }
}
