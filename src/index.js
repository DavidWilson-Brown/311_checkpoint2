const express = require("express");

const app = express();

app.use(express.json());

let port = process.env.PORT || 8000;


app.get("/", function(req, res){
    res.send("Hello");
});

app.listen(port, function(){
    console.log("Application listening on port", port);
})