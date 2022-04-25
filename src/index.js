const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


let routes = require("./routes");
app.use(routes);



let port = process.env.PORT || 8000;


// app.get("/", function(req, res){
//     res.send("Hello " + process.env.developer);
// });

app.use(express.static(__dirname + "/../client/build"));


app.get("/", function(_, res){
    res.sendFile(__dirname + "/../client/build/index.html");
});

app.listen(port, function(){
    console.log("Application listening on port", port);
})

