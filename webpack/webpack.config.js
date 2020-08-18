const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:Path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.template.html'
        }),
    ]
        
}; 