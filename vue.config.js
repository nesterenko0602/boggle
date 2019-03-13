const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./static'),
        path.resolve('./node_modules'),
      ],
    },
  },
};
