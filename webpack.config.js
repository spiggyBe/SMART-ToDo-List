var path = require("path");
module.exports = {
    entry: ['whatwg-fetch', "./js/index.jsx"],
    output: {filename: "out.js", path: path.resolve(__dirname, "dist")},
    mode: "development", watch: true,
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-2", "react"]
                    }
                }

            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'dist',
                        // outputPath: 'dist'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    'sass-loader'
                ]
            }]
    }
}