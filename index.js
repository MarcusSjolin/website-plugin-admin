exports = module.exports = function (app) {
    console.log(__dirname)
    var assets = app.assets.add(__dirname)

    app.router.add("Admin", "/admin", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html", {
            assets: "/assets/"+assets.reference
        })
    })
}
