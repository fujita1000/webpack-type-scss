const path = require('path');
//webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

module.exports = {
    mode: 'development', // "production" | "development" | "none"

    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
     devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
},
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },

    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],

    module: {
        rules: [
          {
            // 拡張子 .ts の場合
            test: /\.ts$/,
            // TypeScriptをコンパイルする
            use: 'ts-loader'    
          },
          {
            test: /(\.s[ac]ss)$/,
            use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "postcss-loader", // 追記
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
          }
        ]
    },

    // import文で .tsファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules内も対象とする
        ],
        extensions: [
            '.ts',
            '.js' // node_modulesのライブラリの読み込みに必要
        ]
    }
};