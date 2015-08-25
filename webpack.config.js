module.exports = function(home, root, filename) {
    return {
        resolveLoader: {
            root: home + "/node_modules"
        },
        entry: __dirname +"/"+ filename,
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
