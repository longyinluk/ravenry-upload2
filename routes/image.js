var express = require('express');
var Image = require('../models/image');
var ImageRouter = express.Router();

ImageRouter.route("/uploadbase")
    .post((req, res, next) => {
        const newImage = new Image({
            imageName: req.body.imageName,
            imageData: req.body.imageData
        });

        newImage.save()
            .then((result) => {
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    })
    .get((req, res) => {
        Image.find({}, function(error, data) {
            res.send(data)
        })
    })

module.exports = ImageRouter;