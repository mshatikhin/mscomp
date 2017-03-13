const common = require("./webpack.common");
const path = require("path");
const urlapi = require("url");
const frontendUrl = "http://localhost:8080";
const url = urlapi.parse(frontendUrl);
const vendors = Object.keys(require("./package.json").dependencies);

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        vendor: vendors,
        main: [
            "./App/AppStart.js",
            "webpack/hot/only-dev-server",
            "webpack-dev-server/client?" + url.href
        ]
    },
    output: {
        publicPath: "/",
        path: path.join(__dirname, "AppBuild", "app"),
        filename: "assets/[name].js",
        chunkFilename: "assets/[id].js"
    },
    watchOptions: {
        aggregateTimeout: 200
    },
    devServer: {
        host: url.hostname,
        port: url.port,
        hot: true,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': "*" }
    },
    devtool: "source-map",
    module: {
        rules: common.rules
    },
    plugins: common.plugins,
    resolve: common.resolve
};
