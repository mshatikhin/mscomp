const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Clean = require("clean-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const path = require("path");
const sourceFiles = path.join(__dirname, "src");

const isProduction = process.env.NODE_ENV == "production";

console.log("\n****************************************************\n");
console.log(isProduction ? "production mode" : "development mode", "\n");
console.log("\n****************************************************\n");

let rules = [
    {
        test: /\.(jsx?)$/,
        use: [
            "babel-loader"
        ],
        exclude: /node_modules/,
        include: [
            sourceFiles,
        ]
    },
    {
        test: /\.(png|jpg|svg|woff|woff2|eot)$/,
        loader: "file-loader",
        include: [
            sourceFiles
        ]
    },
    {
        test: /\.(css)$/,
        use: isProduction
            ? ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
                    "postcss-loader"
                ]
            })
            : [
                "style-loader",
                "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]"
            ],
        include: [
            sourceFiles
        ]
    }
];

let plugins = [
    new ExtractTextPlugin({
        filename: "assets/[name].[contenthash].css",
        disable: false,
        allChunks: true
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(isProduction ? "production" : "development")
        }
    }),
    new CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.bundle.js",
        minChunks: (module) => {
            const userRequest = module.userRequest;
            // module.userRequest returns name of file, including path
            let inNodeModules = userRequest && userRequest.match(/.js$/) && userRequest.indexOf("node_modules") >= 0;
            let inRetailUI = userRequest && userRequest.indexOf("retail-ui") >= 0;
            return inNodeModules || inRetailUI;
        }
    })
];

if (isProduction) {
    plugins.push(new HtmlWebpackPlugin({
        filename: "./index.html",
        template: path.join(__dirname, "src/static/TemplateIndex.html"),
        inject: "body",
        title: "Сайт портфолио Михаила Шатихина"
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new Clean(["AppBuild/app"]));
} else {
    plugins.push(new HtmlWebpackPlugin({
        filename: "./index.html",
        template: path.join(__dirname, "src/static/DevIndexTemplate.html"),
        inject: "body",
        title: ""
    }));
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NamedModulesPlugin());
}

const resolve = {
    extensions: [".js"],
    modules: [
        path.join(__dirname),
        "node_modules",
        "web_modules"
    ],
    alias: {
        ui: path.resolve(__dirname, "/src/components/")
    }
};

module.exports = {
    rules,
    plugins,
    resolve
};
