const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = () => ({
    mode: "development",
    entry: {
        "root-application": "root-application.js",
    },
    output: {
        publicPath: "/",
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: path.resolve(__dirname + "/node_modules/"),
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: { sassOptions: { outputStyle: "expanded" } },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
    resolve: {
        modules: [__dirname, "node_modules"],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            inject: false,
        }),
    ],
    devtool: "source-map",
    externals: [],
    devServer: {
        historyApiFallback: true,
    },
})
