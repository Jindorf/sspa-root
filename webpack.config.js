const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = () => ({
    mode: "production",
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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
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
