var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgerModel.select(function(data) {
        var allObject = {
            burgers: data
        };
        console.log(allObject);
        res.render("index", allObject);
    });
});

// router.post
// router.put

// Export routes for server.js to use.
module.exports = router;