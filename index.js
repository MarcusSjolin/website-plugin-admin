module.exports = function (app) {
    app.assets.add("/admin/assets", __dirname + "/.tmp")
    app.addTranslations('sv_SE', {
        "Admin": "Administration",
        "Dashboard": "Startpanelen",
        "Your summary of your application.": "Applikationssummering",
    })

    app.get("/admin/?*", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html")
    })
}
