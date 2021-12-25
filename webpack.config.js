
// commonJs import
// installation needed webpack plugins through npm and adding in webpack
const HtmlWebpackPlugin = require('html-webpack-plugin')

// for bundling progress plugin inbuilt in webpack. need to install through npm
const webpack = require('webpack')

// webpack-merge to merge multiple config files
const webpackMerge = require('webpack-merge')

// mode config is function which has require statement for fetching different files
// as per arg env. which intern returns function.
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
// commonJs default export
// setting default value to object argument
// install webpack-merge
module.exports = ({ env, presets } = { enc: 'production', presets: [] }) => {
    return {
        // getting cli args in webpack config. args passed from package.json script 
        mode: env.mode,
        // to set output file specifications
        output: {
            // changing output file name
            filename: 'bundle.js'
        },
        //plugins can access webpack internal lifecycle. with the help of plugins we can add
        // any functionality in webpack
        plugins: [
            // creates index.html file in dist. which includes bundled js file
            // very useful for single page applications 
            new HtmlWebpackPlugin(),
            // for webpack bundling progress in cmd
            new webpack.ProgressPlugin()
        ]
    }
}