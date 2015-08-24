exports = module.exports = function (app) {
    app.router.add("Admin", "/admin", function(req, res) {
        res.send("This is an admin page!")
    })
    app.router.add("Admin", "/admin/json", function(req, res) {
        res.json({message: "This is an admin page!"})
    })
    app.router.add("Admin", "/admin/json/array", function(req, res) {
        res.json([{message: "This is an admin page!"}])
    })
}