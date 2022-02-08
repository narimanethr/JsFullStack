const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/scripts/pong.js',
  mode :  'production' ,
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'scripts/bundle.js'
  },

  
  

  devServer: {
      static: {
	       publicPath: path.resolve(__dirname, 'dist'),
	       watch : true
      },
      host : 'localhost',
      port : 8080,
      open : true
  }, 


  plugins: [
      new HtmlWebpackPlugin({
	       template: './src/index.html',
	        filename: './index.html',
      }),
      new CopyPlugin({
          patterns: [
           
            {      // décommenter ce bloc pour copier les fichiers de src/images dans dist/images
              from: 'src/images/*',
              to:  'images/[name][ext]',
              
            },
            {
  
             from: 'src/style/*',
             to:  'style/[name][ext]',
           },
         ]
       }),
     ],
}