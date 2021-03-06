// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { filename: 'bundle.js', path: '/dist' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ]
                }
            },
            {
                test: /\.html$/,
                    use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            title: 'Galacoral-test',
            template: './src/index.html',
            inject: 'body'
        })
    ]
};