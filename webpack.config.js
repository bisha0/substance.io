const path = require("path");

module.exports = {
    // bundling mode
    mode: "development",

    // entry file
    entry: "./src/index.ts",

    devtool: "source-map",

    // bundle output location
    output: {
        filename: "substance.main.js",
        path: path.resolve(__dirname, "dist"),
    },

    // file resolutions
    resolve: {
        extensions: [".ts", ".js"],
    },

    // webpack-loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
    },
};
