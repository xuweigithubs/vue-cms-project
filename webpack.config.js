const path=require('path');
const htmlWebpackPlugin=require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
                new htmlWebpackPlugin({
                    template:path.join(__dirname,'./src/index.html'),
                    filename:'index.html'
                    }),
                new VueLoaderPlugin()
            ],
            module:{
                rules:[//所有第三方模块的匹配规则
                    {test:/\.css$/,use:['style-loader','css-loader']},
                    {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
                    {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
                    {test:/\.jpg|png|gif|bmp|jpeg$/,use:['style-loader','css-loader','sass-loader']},
                    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
                    {test:/\.vue$/,use:'vue-loader'},
                    {test:/\.(eot|ttf|woff|woff2|svg)$/,use:'file-loader'}
                ]
            },
            resolve:{
                alias:{
                    "vue$":"vue/dist/vue.js"
                }
            }
}