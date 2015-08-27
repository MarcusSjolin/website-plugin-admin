module.exports = function(home, root) {
    return {
        resolveLoader: {
            root: home + "/node_modules"
        },
        entry: home + "/app/main.js",
        output: {
            path: home + "/.tmp",
            filename: "./admin.bundle.js"
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel'
                }
            ]
        }
    }
}
