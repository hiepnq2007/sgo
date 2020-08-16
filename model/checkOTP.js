'use tricts';
module.exports = function (req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var otpURL = require("../route_constant").mongoURL
    var myobj = { name: "Company Inc", address: "Highway 37" };
    MongoClient.connect(otpURL, function (err, db) {
        var dbo = db.db("Sgo_booking_otp");

        dbo.collection("DevicesOTP").insertOne(myobj, function (err2, res2) {
            if (err) throw err;
            const message = {};
            message.body = req.responseObject;
            message.status = req.responseStatus || 200;
            message.success = true;
            message.message = 'Create otp success'
            res.status(message.status).send(message);
            console.log("1 document inserted");
            db.close();
        });

    })
}