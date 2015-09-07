module.exports = function (app) {
    app.assets.add("/admin/assets", __dirname + "/.tmp")
    app.assets.add("/assets", __dirname + "/assets")
    app.addTranslations('admin', 'sv_SE', {
        "Admin": "Administration",
        "Home": "Hem",
        "Dashboard": "Startpanelen",
        "Your summary of your application.": "Applikationssummering",
        "Plugins": "Plugins",
        "Your summary of your plugins.": "Sammanfattning av dina plugins",
    })

    app.get("/admin/?*", function(req, res) {
        res.sendFile(__dirname + "/templates/index.html")
    })


    if (app.isDev()) {
        app.devWatch(__dirname + "/app", "**/*")
        app.devWatch(__dirname + "/index.html")
    }
}
