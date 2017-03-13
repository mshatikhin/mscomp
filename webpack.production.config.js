const common = require("./webpack.common");
const path = require("path");
const autoprefixer = require("autoprefixer");
const vendors = Object.keys(require("./package.json").dependencies);

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        vendor: vendors,
        main: "./app/AppStart.js"
    },
    output: {
        publicPath: "/app/",
        path: path.join(__dirname, "AppBuild", "app"),
        filename: "assets/[name].[hash].js",
        chunkFilename: "assets/[id].[hash].js"
    },
    module: {
        rules: common.rules
    },
    plugins: common.plugins,
    resolve: common.resolve
};
