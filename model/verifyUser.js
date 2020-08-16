'use tricts';
module.exports = function (req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var otpURL = require("../route_constant").mongoURL1

    MongoClient.connect(otpURL, function (err, db) {

        var dbo = db.db("ateam_bet");

        dbo.collection("Sgo_verify").findOne({ referenceCode: req.body.referenceCode, isActive: false }, function (err2, data) {
            if (err) throw err;
            const message = {};
            message.status = req.responseStatus || 200;
            if (!data) {
                message.message = 'Không tìm thấy mã'
            } else {
                console.log("data  " + data);
                data.isActive = true
                dbo.collection("Sgo_verify").save(data);
                message.message = "Success"
            }
            message.body = req.responseObject;
            res.status(message.status).send(message);
            console.log("data  " + data);
            db.close();
        });
    })
}