'use tricts';
module.exports = function (req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var otpURL = require("../route_constant").mongoURL1
    var message = require("./message")
    const shortid = require('shortid');
    // const Hashids = require('hashids')
    // var hashids = new Hashids('sgo',6);
    MongoClient.connect(otpURL, function (err, db) {
        if (err) {
            throw err
        }
        var dbo = db.db("ateam_bet");
        var code = shortid.generate()
        var myobj = { phone: req.body.phone, email: req.body.email, referenceCode: code, isActive: false };
        dbo.collection("Sgo_verify").insertOne(myobj, function (err1, res1) {
            if (err1) throw err1;
            console.log("1 document inserted");
            message.status = req.responseStatus || 200;
            message.message = "success"
            message.data.referenceCode = code
            res.status(message.status).send(message);
            db.close();
        });
    })
}