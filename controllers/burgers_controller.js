const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.post("/api/burgers", function(req, res){


    
})

router.put("/api/burgers/:id", function(req, res){
    
    burger.update()

    
})


router.get("/", function(req, res){



})


module.exports = router;