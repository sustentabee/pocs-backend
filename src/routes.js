const express = require('express');
const routes = express.Router();
const AlertController = require('./app/controllers/AlertController');

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

routes.get("/alert", AlertController.index);
routes.post("/alert", AlertController.store);

module.exports = routes;