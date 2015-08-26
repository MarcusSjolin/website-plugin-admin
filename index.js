exports = module.exports = function (app) {
    var assets = app.assets.add(__dirname)

    app.router.add("Admin", "/admin", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html", {
            assets: "/assets/"+assets.reference
        })
    })
}
