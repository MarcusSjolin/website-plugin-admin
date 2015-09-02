module.exports = function (app) {
    app.assets.add("/admin/assets", __dirname + "/.tmp")

    app.get("/admin/?*", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html")
    })
    if (app.isDev()) {
        app.devWatch(__dirname + "/app", "**/*")
        app.devWatch(__dirname + "/index.html")
    }
}
