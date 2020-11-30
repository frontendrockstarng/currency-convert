const path = require('path') //the require function in node is used to import modules
const HtmlWebpackPlugin =  require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), //this is used to take an absolute path __dirname means current directly
        filename: 'js/bundle.js'
    },

    devServer:{
        open:true,
        contentBase: 'dist'
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],

    module:{
        rules:[
           { test:/\.js$/,
           exclude: /node_modules/,
           use:{
               loader: 'babel-loader'
           },},

           {test: /\.css$/,
              use: [
                  {loader: 'style-loader'},
                  {loader: 'css-loader'}
              ],
              },
              {
              test: /\.(jpg|jpeg|png|gif|svg)$/,
              use: [
                
                {loader: 'file-loader'},
                {loader: 'url-loader'},
                {loader: 'img-loader'}
              ]}
              
        ],

          
    }
        
}