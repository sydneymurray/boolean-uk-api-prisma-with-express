const express = require("express")  
const petsRouter = express.Router()

const petsController = require("./controller")

console.log("Router")

petsRouter.post("/", petsController.createOne)
petsRouter.get("/", petsController.retrieveAll)
petsRouter.get("/types", petsController.petTypes)
petsRouter.get("/type/:type", petsController.retrieveType)
petsRouter.get("/:id", petsController.retrieveOne)
petsRouter.delete("/:id", petsController.deleteOne)
petsRouter.patch("/:id", petsController.updateOne)
petsRouter.post("/build", petsController.buildData)
module.exports = petsRouter