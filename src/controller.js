let db = require("./db");

let listActors = function(req, res) {
let sql = "select id, username, first_Name, last_Name from actors";

db.query(sql, [], function(error, rows) {
    if(error) {
        console.log("Failed to get actors", error);
        res.sendStatus(500);
    } else {
        res.json(rows);
    }
  })
}


let getActor = function(req, res) {
let id = req.params.id;
let sql = "select id, username, first_name, last_name from actors where id = ?";
let params = [];
params.push(id);

db.query(sql, params, function(error, rows){
    if(error) {
        console.log("Failed to get the actor by their ID", error);
        res.sendStatus(500);
    } else {
        console.log("Actor by ID is successful")
        res.json(rows);
    }
})

}


let listScripts = function(req, res) {
let sql = "select id, actor_id, script_title from scripts";

db.query(sql, [], function(error, rows) {
    if(error) {
        console.log("Failed to get scripts", error);
        res.sendStatus(500);
    } else {
        res.json(rows);
    }
  })
}



let getScript = function(req, res) {
let id = req.params.id;
let sql = "select id, actor_id, script_title from scripts where id = ?";
let params = [];
params.push(id);
    
db.query(sql, params, function(error, rows){
    if(error) {
       console.log("Failed to get the script by its ID", error);
       res.sendStatus(500);
    } else {
      console.log("Script by ID is successful")
      res.json(rows);
    }
 })
}


let listPlaywrights = function(req, res) {
let sql = "select id, actor_id, playwright_lastName, playwright_firstName from playwrights";
db.query(sql, [], function(error, rows) {
    if(error) {
        console.log("Failed to get playwrights", error);
        res.sendStatus(500);
    } else {
        res.json(rows);
    }
  })
}


let getPlaywright = function(req, res) {
let id = req.params.id;
let sql = "select id, actor_id, playwright_lastName, playwright_firstName from playwrights where id = ?";
let params = [];
params.push(id);
        
db.query(sql, params, function(error, rows){
    if(error) {
        console.log("Failed to get the playwright by their ID", error);
        res.sendStatus(500);
    } else {
        console.log("Playwright by ID is successful")
        res.json(rows);
    }
  })
}


let listActorsLibrary = function(req, res) {
let sql = "select id, actor_id, playwright_id, script_id from actorsLibrary";
db.query(sql, [], function(error, rows) {
    if(error) {
        console.log("Failed to get actorsLibrary", error);
        res.sendStatus(500);
    } else {
        res.json(rows);
    }
  })

}


let getActorsLibrary = function(req, res) {
let id = req.params.id;
let sql = "select id, actor_id, playwright_id, script_id from actorsLibrary where id = ?";
let params = [];
params.push(id);
            
db.query(sql, params, function(error, rows){
    if(error) {
        console.log("Failed to get the actorsLibrary by its ID", error);
        res.sendStatus(500);
    } else {
        console.log("actorsLibrary by ID is successful")
        res.json(rows);
    }
  })
}


let listScriptScenes = function(req, res) {
let sql = "select id, actor_id, script_id, sceneNumber, sceneName, dialogue from scriptScenes";
    db.query(sql, [], function(error, rows) {
        if(error) {
            console.log("Failed to get scriptScenes", error);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
      })
}


let getScriptScene = function(req, res) {
let id = req.params.id;
let sql = "select id, actor_id, script_id, sceneNumber, sceneName, dialogue from scriptScenes where id = ?";
let params = [];
params.push(id);
                
db.query(sql, params, function(error, rows){
    if(error) {
        console.log("Failed to get the scriptScene by its ID", error);
        res.sendStatus(500);
    } else {
        console.log("scriptScene by ID is successful")
        res.json(rows);
    }
  })
}



let addActor = function(req, res) {
    console.log("addActor", req.body);
    let input = req.body;

    let sql = "insert into actors (username, first_name, last_name) values (?, ?, ?);"
    let params = [];
    params.push(input.username);
    params.push(input.first_name);
    params.push(input.last_name);
    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to add actor ", error);
            res.sendStatus(500);
        } else {
            console.log("Added actor successfully")
            res.sendStatus(202);
        }
    })
}


let addScript = function(req, res) {
    console.log("addScript", req.body);
    let input = req.body;

    let sql = "insert into scripts (script_title) values (?, ?);"
    let params = [];
    params.push(input.script_title);
    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to add script ", error);
            res.sendStatus(500);
        } else {
            console.log("Added script successfully")
            res.sendStatus(202);
        }
    })
}


let addPlaywright = function(req, res) {
    console.log("addPlaywright", req.body);
    let input = req.body;

    let sql = "insert into playwrights (playwright_lastName, playwright_firstName) values (?, ?);"
    let params = [];
    params.push(input.playwright_lastName);
    params.push(input.playwright_firstName);
    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to add playwright ", error);
            res.sendStatus(500);
        } else {
            console.log("Added playwright successfully")
            res.sendStatus(202);
        }
    })
}


let addScriptScene = function(req, res) {
    console.log("addScriptScene", req.body);
    let input = req.body;

    let sql = "insert into scriptScenes (sceneNumber, sceneName, dialogue) values (?, ?, ?);"
    let params = [];
    params.push(input.sceneNumber);
    params.push(input.sceneName);
    params.push(input.dialogue);
    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to add scriptScene ", error);
            res.sendStatus(500);
        } else {
            console.log("Added scriptScene successfully")
            res.sendStatus(202);
        }
    })
}


let addActorsLibrary = function(req, res) {
    console.log("addActorsLibrary", req.body);
    let input = req.body;

    let sql = "insert into actorsLibrary (actor_id, playwright_id, script_id) values (?, ?, ?);"
    let params = [];
    params.push(input.actor_id);
    params.push(input.playwright_id);
    params.push(input.script_id);
    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to add actorsLibrary ", error);
            res.sendStatus(500);
        } else {
            console.log("Added actorsLibrary successfully")
            res.sendStatus(202);
        }
    })
}





let updateActor = function(req, res) {
    console.log("updateActor", req.params.body);
    let id = req.params.id;

    let input = req.body;
    let newUserName = input.username;
    let newFirstName = input.first_name;
    let newLastName = input.last_name;

    let sql = "update actors set username = ?, first_name = ?, last_name = ? where id = ?";
    let params = [
        newUserName,
        newFirstName,
        newLastName,
        id
    ];

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update actor: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });

}


let updateScript = function(req, res) {
    console.log("updateScript", req.params.body);
    let id = req.params.id;

    let input = req.body;
    let newActorId = input.actor_id;
    let newScriptTitle = script_title;

    let sql = "update scripts set actor_id = ?, script_title = ? where id = ?";
    let params = [
        newActorId,
        newScriptTitle,
        id
    ];

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update script: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });
}


let updatePlaywright = function(req, res) {
    console.log("updatePlaywright", req.params.body);
    let id = req.params.id;

    let input = req.body;
    let newActorId = input.actor_id;
    let newPlaywrightLastName = input.playwright_lastName;
    let newPlaywrightFirstName = input.playwright_firstName;

    let sql = "update scripts set actor_id = ?, playwright_lastName = ?, playwright_firstName = ? where id = ?";
    let params = [
        newActorId,
        newPlaywrightLastName,
        newPlaywrightFirstName,
        id
    ];

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update playwright: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });
}


let updateScriptScene = function(req, res) {
    console.log("updateScriptScene", req.params.body);
    let id = req.params.id;

    let input = req.body;
    let newActorId = input.actor_id;
    let newScriptId = input.script_id;
    let newSceneNumber = input.sceneNumber;
    let newSceneName = input.sceneName;
    let newDialogue = input.dialogue;

    let sql = "update scripts set actor_id = ?, playwright_lastName = ?, playwright_firstName = ? where id = ?";
    let params = [
        newActorId,
        newScriptId,
        newSceneNumber,
        newSceneName,
        newDialogue,
        id
    ];

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update scriptScene: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });
}


let updateActorsLibrary = function(req, res) {
    console.log("updateActorsLibrary", req.params.body);
    let id = req.params.id;

    let input = req.body;
    let newActorId = input.actor_id;
    let newPlaywrightId = input.playwright_id;
    let newScriptId = input.script_id;

    let sql = "update actorsLibrary set actor_id = ?, playwright_id = ?, script_id = ? where id = ?";
    let params = [
        newActorId,
        newPlaywrightId,
        newScriptId,
        id
    ];

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update scriptScene: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });
}





let deleteActor = function(req, res) {
    let sql = "delete from actors, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete actor", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted actor by ID is successful")
            res.json(rows);
        }
    })
}


let deleteScript = function(req, res) {
    let sql = "delete from scripts, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete script", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted script by ID is successful")
            res.json(rows);
        }
    })


}


let deletePlaywright = function(req, res) {
    let sql = "delete from playwrights, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete playwright", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted playwright by ID is successful")
            res.json(rows);
        }
    })
}



let deleteScriptScene = function(req, res) {
    let sql = "delete from scriptScenes, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete scriptScene", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted scriptScene by ID is successful")
            res.json(rows);
        }
    })


}



let deleteActorsLibrary = function(req, res) {
    let sql = "delete from actorsLibrary, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete actorsLibrary", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted actorsLibrary by ID is successful")
            res.json(rows);
        }
    })


}



module.exports = {
    listActors, getActor, 
    listScripts, getScript, 
    listPlaywrights, getPlaywright,
    listScriptScenes, getScriptScene,
    listActorsLibrary, getActorsLibrary,
    addActor, addScript, addPlaywright, addScriptScene, addActorsLibrary,
    updateActor, updateScript, updatePlaywright, updateScriptScene, updateActorsLibrary,
    deleteActor, deleteScript, deletePlaywright, deleteScriptScene, deleteActorsLibrary 
}