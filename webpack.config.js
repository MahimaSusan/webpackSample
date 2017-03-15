module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};


// webpack.config.js
// module.exports = {
//     ...
//     module: {
//         rules: [{
//             test: /\.scss$/,
//             use: [{
//                 loader: "style-loader" // creates style nodes from JS strings
//             }, {
//                 loader: "css-loader" // translates CSS into CommonJS
//             }, {
//                 loader: "sass-loader" // compiles Sass to CSS
//             }]
//         }]
//     }
// };
