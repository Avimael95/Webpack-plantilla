const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            esModule:false,
                            name:'static/[name].[ext]',
                        }
                    }
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
        new CleanWebpackPlugin(),
    ]
        
}; 