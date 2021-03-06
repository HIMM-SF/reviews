const path = require('path');
const SRC_DIC = path.join(__dirname, 'client', 'src');
const PUBLIC_DIR = path.join(__dirname, 'client', 'public');

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIC, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$|\.m?js$|\.scss$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: { modules: true }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};