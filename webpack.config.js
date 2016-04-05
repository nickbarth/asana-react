module.exports = {
  entry: './app/App.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        query: { presets: ['react', 'es2015'] },
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
