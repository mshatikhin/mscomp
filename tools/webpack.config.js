var nodeEnv = process.env.NODE_ENV != null ? process.env.NODE_ENV.toString().trim() : "development";
var buildPath = "/AppBuild/app/";
var httpUrl = "http://localhost:55443";
var devUrl = "http://localhost:4400";
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
        PRODUCTION: JSON.stringify(false),
        API_URL: JSON.stringify(httpUrl)
    }),
    new webpack.ProvidePlugin({
        "$": "jquery",
        "jquery": "jquery"
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

var entry = ["./app/AppStart.tsx", "webpack/hot/only-dev-server", "webpack-dev-server/client?" + devUrl];

var devServer = {
    host: "localhost",
    port: 52667,
    hot: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': "*" }
};

var loaders = [
    {
        test: /\.(jsx?|tsx?)$/,
        loader: "react-hot!babel?presets[]=react,presets[]=es2015!ts",
        include: path.resolve(__dirname, "src")
    },
    {
        test: /\.css$/,
        loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader"
    },
    {
        test: /\.(less)$/,
        loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader!less"
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url?name=[path][name].[ext]&limit=10000"
    },
    {
        test: /\.(woff|woff2)$/,
        loader: "url?limit=100000"
    }
];

var config = {
    context: path.join(__dirname, "src"),
    entry: entry,
    devServer: devServer,
    devtool: "eval",
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
        extensions: ["", ".js", ".ts", ".tsx"],
        root: path.resolve(__dirname, ".."),
        modulesDirectories: ["node_modules"],
        ui: path.resolve(__dirname, "/src/components/")
    },
    module: {
        loaders: loaders,
        noparse: [/\/node_modules\/(jquery|react)/]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    externals: {
        "jquery": "$",
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: plugins
};

module.exports = config;
