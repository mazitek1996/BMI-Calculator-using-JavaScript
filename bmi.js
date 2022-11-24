// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));


// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/", function(req, res){


//    var bm1 = Number(req.body.bm1);
//    var bm2 = Number(req.body.bm2);

//    var result = bm1 + bm2;

//    res.send(result);
// });


// app.listen(3000, function(){
//     console.log("server is listening on port 3000");
// });

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

var bm1 = Number(req.body.bm1);
var bm2 = Number(req.body.bm2);

var result = bm1 + bm2;
    
    res.send("The result is " + result);
});

app.listen(3000, function(){
    console.log("Server is listening at port 3000");
});