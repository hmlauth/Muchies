var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgerModel.selectAll(function(data) {
        var allObject = {
            burgers: data
        };
        console.log(allObject);
        res.render("index", allObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgerModel.createOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], 
        function(result) {
            res.json({id: result.insertID});
    });
});

// router.put

// Export routes for server.js to use.
module.exports = router;