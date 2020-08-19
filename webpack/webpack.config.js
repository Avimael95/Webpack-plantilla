const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports ={
    mode:'production',
    entry:'./src/index.js',
    output:{
        path:Path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }

        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.template.html',
            //===Por si por defecto no lo minifica
            // minify:{
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // }
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        }),
    ]
        
}; 