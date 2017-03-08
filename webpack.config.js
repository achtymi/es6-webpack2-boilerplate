var path = require('path')

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js/,
        include: /src/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  plugins: []
}
