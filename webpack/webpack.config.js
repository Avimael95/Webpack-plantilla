const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports ={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:Path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }

        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.template.html'
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        }),
    ]
        
}; 