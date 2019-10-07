const path = require('path')
const webpack = require('webpack')
require('dotenv').config();

const PROD = process.env.NODE_ENV === 'production';

let plugins = [];

PROD ? [
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  ] : '';

module.exports = {
    mode: process.env.NODE_ENV, // 실서비스 : produxtion
    devtool: 'eval-source-map',  // 빠르게 + produxtion 아님
    resolve: {
        modules: ['node_modules'],  // 생략가능
        extensions: ['.css', '.js', '.json']
    },
    entry: {
        app: ['./lib/lib.module']
    },

    module: {
        rules: [
            { test: /\.js$/, use: { loader: 'babel-loader' } },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            {
                enforce: 'pre', // enfoce: "pre"로 해서 다른 로더들보다 먼저 실행하게 한다.
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,  // exclude 속성은 eslint 검사시 제외 할 디렉토리나 모듈을 설정한다.
                options: {
                  fix: true
                }
            }
        ]
    },

    output: {
        library: process.env.NAME,
        libraryTarget: process.env.TARGET,
        path: __dirname,
        filename: (PROD) ? 'dist/carousel.min.js' : 'dist/carousel.js'
    },

    plugins: plugins,
}