var express = require('express');
var querystring = require('querystring');
const dotenv = require('dotenv').config();

var app = express();

app.use("/", express.static('client'));
var port = process.env.PORT || 80;
app.listen(port);
console.log('Express listening on port ' + port);

function querystringHelper(req, res, cb){
    var q = req.url.indexOf("?");
    if(q > -1){
        var parsedObj = querystring.parse(req.url.slice(q + 1));
        cb(parsedObj, response=>{
            res.send(response);
        });
    }
}