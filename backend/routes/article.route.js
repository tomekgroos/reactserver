    let mongoose  = require("mongoose"),
        express  = require("express"),
        router  = express.Router();

    let articleSchema = require("../models/Article");

    router.route("/create-article").post((req, res, next) => {
       articleSchema.create(req.body, (error, data) => {
           if(error) {
               return next(error)
           } else {
               console.log(data);
               res.json(data)
           }
       })
    });

    module.exports = router;