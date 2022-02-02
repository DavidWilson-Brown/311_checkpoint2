const express = require("express");
require("dotenv").config();

const app = express();


app.use(express.json());

let routes = require("./routes");



let port = process.env.PORT || 8000;


app.get("/", function(req, res){
    res.send("Hello " + process.env.developer);
});

app.listen(port, function(){
    console.log("Application listening on port", port);
})