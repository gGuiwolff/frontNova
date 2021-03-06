const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    entry: [
        "@babel/polyfill",
        path.join(__dirname, "src", "style.css"),
        path.join(__dirname, "src", "index.js"),
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    performance: {
        hints: false,
    },
    devServer: {
        https: true,
        hot: true,
        contentBase: path.join(__dirname, "public"),
        publicPath: '/',
        proxy: {
            "/": {
                target: "https://veg2.herokuapp.com",
                secure: true,
            },
            "/socket.io": {
                target: "https://veg2.herokuapp.com",
                ws: true,
                secure: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
});
