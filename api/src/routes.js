const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");
const SessionController = require("./constrollers/SessionController");
const SpotController = require("./constrollers/SpotController");
const BookingController = require("./constrollers/BookingController") ;

const routes = express.Router();

const upload = multer(uploadConfig);

/*
req.query = Acessar query params (para filtros)
req.params = Acessar route params (para edição, delete)
req.body = Acessar corpo da requisição (criação, edição de registros)
*/

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store); 

routes.post("/spots/:spot_ id/bookings", BookingController.store); 

module.exports = routes;