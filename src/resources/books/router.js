const express = require("express")  
const booksRouter = express.Router()

const booksController = require("./controller")

console.log("Router")

booksRouter.post("/", booksController.createOne)
booksRouter.get("/", booksController.retrieveAll)
booksRouter.get("/fiction", booksController.retrieveFiction)
booksRouter.get("/non-fiction", booksController.retrieveNonFiction)
booksRouter.get("/:id", booksController.retrieveOne)
booksRouter.delete("/:id", booksController.deleteOne)
booksRouter.patch("/:id", booksController.updateOne)
booksRouter.get("/author/:name", booksController.byAuthor)
booksRouter.post("/build", booksController.buildData)
module.exports = booksRouter