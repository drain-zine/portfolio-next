const fs = require('fs');
module.exports = { getDataPaths: () =>  fs.readdirSync('./data/design/') };
