const express = require("express");

const routes = express.Router();
const BookController = require("./controller/BookController");

routes.get("/books", BookController.list);

routes.get("/books/:id", BookController.get);

routes.post("/books", BookController.store);

routes.put("/books/:id", BookController.store);

routes.delete("/books/:id", BookController.delete);

module.exports = routes;