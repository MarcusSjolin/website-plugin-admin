module.exports = function (app) {
    console.log("adding "+ __dirname + "/.tmp")
    app.assets.add("/assets", __dirname + "/.tmp")

    app.get("/admin", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html")
    })
}
