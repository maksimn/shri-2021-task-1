module.exports = {
    devtool: "inline-source-map",
    entry: "./src/index.js",
    mode: 'development',
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    output: {
        path: __dirname + "/build/",
        filename: "stories.js"
    }
}
