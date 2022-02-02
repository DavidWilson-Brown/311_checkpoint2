let mysql = require("mysql");

let connection = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

connection.query("select now()", function(err, rows) {
    if(err) {
        console.error("Failed to create a database connection", err);
    } else {
        console.log("Connected to database at", rows);
    }
})



module.exports = connection;