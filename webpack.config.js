const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: slsw.lib.entries,  //part of the serverless-webpack plugin
    //automatically picks up all our handler functions and packages them.
    target: "node",
    //since 'aws-sdk' is not compatible with webpack, we exclude all node dependencies
    externals: [nodeExternals()],
    //run babel on all .js files and skip those in node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
};