module.exports = {
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
};
