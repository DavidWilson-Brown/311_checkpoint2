const express = require('express');

let router = express.Router();

let auths = require('./auths');
let controller = require('./controller');

// signup route
router.post('/signup', auths.signup);

// login route
router.post('/login', auths.login);

// LIST /actors
router.get('/actor', auths.checkJWT, controller.listActors);

// GET /actor/:id
router.get('/actors/:id', auths.checkJWT, controller.getActor);

// LIST /scripts
router.get('/scripts', auths.checkJWT, controller.listScripts);

// GET /script/:id
router.get('/scripts/:id', auths.checkJWT, controller.getScript);

// LIST /playwrights
router.get('/playwrights', controller.listPlaywrights);

// GET /playwright/:id
router.get('/playwrights/:id', auths.checkJWT, controller.getPlaywright);

// LIST /actorsLibrary
router.get('/actorsLibrary', controller.listActorsLibrary);

// GET /actorsLibrary/:id
router.get('/actorsLibrary/:id', auths.checkJWT, controller.getActorsLibrary);

// LIST /scriptScenes
router.get('/scriptScenes', auths.checkJWT, controller.listScriptScenes);

// GET /scriptScenes/:id
router.get('/scriptScenes/:id', auths.checkJWT, controller.getScriptScene);

// LIST /actorsLibrary
router.get('/actorsLibrary/:id', auths.checkJWT, controller.listActorsLibrary);

// GET /actorsLibrary/:id
router.get('/actorsLibrary/:id', auths.checkJWT, controller.getActorsLibrary);

// POST /actor
router.post('/actors', auths.checkJWT, controller.addActor);

// POST /script
router.post('/scripts', controller.addScript);

// POST /playwright
router.post('/playwrights', auths.checkJWT, controller.addPlaywright);

// POST /scriptScene
router.post('/scriptScene', auths.checkJWT, controller.addScriptScene);

// POST /actorsLibrary
router.post('/actorsLibrary', auths.checkJWT, controller.addActorsLibrary);

// PUT /actor/:id
router.put('/actors/:id', auths.checkJWT, controller.updateActor);

// PUT /script/:id
router.put('/scripts/:id', auths.checkJWT, controller.updateScript);

// PUT /playwright/:id
router.put('/playwrights/:id', auths.checkJWT, controller.updatePlaywright);

// PUT /scriptScene/:id
router.put('/scriptScene/:id', controller.updateScriptScene);

// PUT /actorsLibrary/:id
router.put('/actorsLibrary/:id', controller.updateActorsLibrary);

// DELETE /actor/:id
router.delete('/actors/:id', auths.checkJWT, controller.deleteActor);

// DELETE /script/:id
router.delete('/scripts/:id', auths.checkJWT, controller.deleteScript);

// DELETE /playwright/:id
router.delete('/playwrights/:id', auths.checkJWT, controller.deletePlaywright);

// DELETE /scriptScene/:id
router.delete('/scriptScene/:id', auths.checkJWT, controller.deleteScriptScene);

// DELETE /actorsLibrary/:id
router.delete(
  '/actorsLibrary/:id',
  auths.checkJWT,
  controller.deleteActorsLibrary
);

module.exports = router;
