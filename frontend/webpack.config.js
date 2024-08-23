// webpack.config.js
module.exports = {
  // Other webpack configurations...

  resolve: {
    fallback: {
      path: false,
      os: false,
      crypto: false,
    },
  },
};
