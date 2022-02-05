// this is the authentication function
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let db = require("./db");

let jwtSecret = process.env.JWT_SECRET;





// this function should check if the request has a valid JWT Token 
let checkJWT = function(req, res, next) {
    // get the token from the header
    let authHeader = req.headers.authorization;

    let signedToken;
    if(authHeader) {
        let parts = authHeader.split(" ");
        signedToken = parts[1];
    } else {
       signedToken = null; 
    }

    if(!signedToken) {
        res.send(401).status("Unauthorized");
    }

    // if the token is valid, call next,
    if(signedToken) {
        jwt.verify(signedToken, jwtSecret, function(err, token) {
            if(err) {
                console.log("Could not verify they jwt token", err);
                res.send(401).status("Unauthorized");
            } else {
                req.jwtToken = token;
                next();
            }
        })
    }


    // otherwise return a 401


}

//this function uses the information in the request
// to add a new user to the database
let signup = function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // check if a username was passed in
    if(!username) {
        res.status(400).send("username required");
        return;
    } 

    // check that a password was passed in
    if(!password) {
        res.status(400).send("password required");
        return;
    }

    // hash the password
    let hash = bcrypt.hashSync(password, 10);

    // store the username and the hash in the database
    let sql = "insert into actors(username, password) values(?, ?);"
    let params = [username, hash];

    db.query(sql, params, function(err, rows) {
        if(err) {
        console.log("Could not create user", err);
        res.status(500).send("Could not create user")
        } else {
            res.status(200).send("User created");
        }
    })

}


// this function checks the username and password
// from the request, and returns a valid JWT Token
// if the username and password are good
let login = function(req, res) {
    // get the username and password
    let username = req.body.username;
    let password = req.body.password;


    // get the password hash for the username from the database
    let sql = "select username, password from actors where username = ?";
    let params = [username];

    let goodPassword = false;
    db.query(sql, params, function(err, rows) {
        if(err) {
            console.error("Could not login user", err);
            res.status(401).send("Unauthorized");
        } else if(rows.length > 1) {
            console.error("There is more than one row for username", username);
        } else if(rows.length == 0) {
            console.error("Could not find user for ", username);
        } else {
           let storedHash = rows[0].password; 
           goodPassword = bcrypt.compareSync(password, storedHash);
        }

        if(goodPassword) {
            //generate a token, sign it, and return it
            let token = {
                "username" : username
            };

            let signedToken = jwt.sign(token, jwtSecret);
            res.json(signedToken);
        } else {
            res.status(401).send("Unauthorized");
        }
    })


}


module.exports = {
    checkJWT, login, signup
}