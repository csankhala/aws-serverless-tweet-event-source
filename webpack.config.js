const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'dist');

const LAMBDA_DIR = path.resolve(SRC_DIR, 'lambda');

module.exports = (env, argv) => ({
    entry: {
        tweetPoller: path.resolve(LAMBDA_DIR, 'TwitterTweetPollerHandler.ts'),
    },
    externals: [
        'aws-sdk'
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: "ts-loader",
        }],
    },
    output: {
        path: OUT_DIR,
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    target: 'node',
    plugins: [new webpack.IgnorePlugin(/^electron$/)]
});