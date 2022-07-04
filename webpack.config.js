import * as path from "path";
import { default as Webpack } from "webpack";
import "webpack-dev-server";

import { swcrc } from "./swc.config.js";

const __dirname = new URL(".", import.meta.url).pathname;

/**
 * @typedef {boolean | string} BoolOrString 
 */
/**
 * @typedef {Record<string, BoolOrString>} Env
 */
/**
 * @typedef {Record<string, *>} Argv
 */

/**
 * 
 * @param {Env} env 
 * @param {Argv} argv 
 * @returns {Webpack.Configuration}
 */
function config(env, argv) {
    return {
        mode: argv.mode,
        entry: "./src/entry/bundle.tsx",
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "[name].[contenthash].js",
            chunkFilename: "[id].[contenthash].js",
            hashDigestLength: 8,
            module: true,
            scriptType: "module",
            clean: true,
        },
        experiments: {
            outputModule: true,
            topLevelAwait: true
        },
        devtool: "eval",
        target: ["web", "es5"],
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        },
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: "style-loader",
                            options: { esModule: true }
                        },
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1 }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|ico)$/i,
                    // More information here https://webpack.js.org/guides/asset-modules/
                    type: "asset",
                },
                {
                    test: /\.(m?js|jsx|ts|tsx)$/i,
                    exclude: /(node_modules|bower_components)/,
                    loader: "swc-loader",
                    options: swcrc
                }
            ]
        },
        devServer: {
            port: 3081,
            hot: true
        }
    };
}

/* Needed to avoid TS warnings, do not remove. */
Webpack;

export default config;