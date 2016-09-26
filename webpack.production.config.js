var nodeEnv = process.env.NODE_ENV != null ? process.env.NODE_ENV.toString().trim() : "production";
var buildPath = "/AppBuild/app/";
var publicPath = "/app/";

var webpack = require("webpack");
var path = require("path");
var node_modules = path.resolve(__dirname, "node_modules");

var Clean = require("clean-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require("autoprefixer");
var precss = require("precss");

var plugins = [
    new Clean(["AppBuild/app"]),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PRODUCTION: JSON.stringify(true)
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("assets/[name].[contenthash].css", {
        allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),
    new HtmlWebpackPlugin({
        title: "",
        filename: "../index.html",
        template: "src/static/TemplateIndex.html",
        inject: "body"
    })
];

var entry = ["./App/AppStart.js"];

var loaders = [
    {
        test: /\.js$/,
        loader: "react-hot!babel",
        include: path.resolve(__dirname, "src")
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader")
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url?name=[path][name].[ext]&limit=10000"
    }
];

var config = {
    context: path.join(__dirname, "src"),
    entry: entry,
    devtool: null,
    output: {
        publicPath: publicPath,
        path: path.join(__dirname, buildPath),
        filename: "assets/[name].[hash].js",
        chunkFileName: "assets/[id].[hash].js"
    },
    watchOptions: {
        aggregateTimeout: 200
    },
    resolve: {
        extensions: ["", ".js"],
        root: path.resolve(__dirname, ".."),
        modulesDirectories: ["node_modules"],
        ui: path.resolve(__dirname, "/src/components/")
    },
    module: {
        loaders: loaders,
        noparse: [/\/node_modules\/(react)/]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: plugins
};

module.exports = config;
