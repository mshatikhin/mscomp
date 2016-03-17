var babelJest = require("babel-jest");
var webpackAlias = require("jest-webpack-alias");
var tsc = require("typescript");

module.exports = {
    process: function (src, path) {    
        if (filename.indexOf("node_modules") === -1) {
            if (path.endsWith(".ts") || path.endsWith(".tsx")) {
                return tsc.transpile(
                  src,
                  {
                      module: tsc.ModuleKind.CommonJS,
                      jsx: tsc.JsxEmit.React
                  },
                  path,
                  []
                );
            }
            src = babelJest.process(src, path).replace(/^import.*\"styles.*\"\;$/gm, "");
            src = webpackAlias.process(src, path);
        }
        return src;
    }
};
