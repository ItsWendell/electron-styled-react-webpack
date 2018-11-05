import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { spawn } from 'child_process';

import { HotModuleReplacementPlugin, IgnorePlugin } from 'webpack';

__dirname = process.cwd();

const rendererPath = path.resolve(__dirname, 'src/renderer')

export default {
    watch: true,
    target: 'electron-renderer',
    entry: rendererPath,
    context: rendererPath,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: path.resolve(__dirname, '/'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', 'html'],
        modules: [
            'node_modules',
            rendererPath,
        ],
    },
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),
        new HotModuleReplacementPlugin(),
    ],
};
