/* 
    ./webpack.config.js
    > yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
    > touch .babelrc

    entry: Specifies the entry file where the bundler starts the bundling process.

    output: Specifies the location where the bundled Javascript code is to be saved.

    loaders: They are transformations that are applied on a file in our app. They are place in an array.

    if you have separate style sheets in your project you'd require a CSS loader. All these loaders can be found in the webpack documentation.
*/

//webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Use __dirname to ensure the path is correct
    filename: 'index_bundle.js',
    publicPath: '/' // Ensure your output can be accessed correctly
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Combine .js and .jsx regex
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Handles CSS files
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Allow importing .js and .jsx without specifying the extension
  },
  plugins: [HtmlWebpackPluginConfig]
};