var nodeEnv = process.env.NODE_ENV != null ? process.env.NODE_ENV.toString().trim() : "development";
var buildPath = "/AppBuild/app/";
var devUrl = "http://localhost:8080";
var publicPath = "/";


console.log("*****************************");
console.log(`Build mode: ${nodeEnv}`);
console.log("*****************************");

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
        PRODUCTION: JSON.stringify(false)
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("assets/[name].css", {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        title: "",
        filename: "../../index.html",
        template: "src/static/DevIndexTemplate.html",
        inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin()
];

var entry = ["./App/AppStart.js", "webpack/hot/only-dev-server", "webpack-dev-server/client?" + devUrl];

var devServer = {
    host: "localhost",
    port: 8080,
    hot: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': "*" }
};

var loaders = [
    {
        test: /\.js$/,
        loader: "react-hot!babel",
        include: path.resolve(__dirname, "src")
    },
    {
        test: /\.css$/,
        loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader"
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url?name=[path][name].[ext]&limit=10000"
    }
];

var config = {
    context: path.join(__dirname, "src"),
    entry: entry,
    devServer: devServer,
    devtool: "eval-source-map",
    output: {
        publicPath: publicPath,
        path: path.join(__dirname, buildPath),
        filename: "assets/[name].js",
        chunkFileName: "assets/[id].js"
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
