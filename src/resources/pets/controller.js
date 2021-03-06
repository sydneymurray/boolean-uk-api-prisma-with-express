const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

let  {buildAnimalDatabase} = require("../utils/mockData")


function createOne(req, res){
  let pet = {...req.body}
  prisma.pets.create({data: pet})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.pets.findMany({ 
    orderBy: {publicationdate: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  prisma.pets.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.pets.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let pet = req.body
  prisma.pets.update({where: {id}, data: pet})
    .then(dbResponse => res.json(dbResponse))
}

function petTypes(req, res){
  prisma.pets.findMany({
    select: {type: true},
    distinct: ['type'],
    orderBy: {type: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveType(req, res){
  let type = req.params.type
  prisma.pets.findMany({
    where: {type}, 
    orderBy: {type: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

/*
function petType(req, res){
  let criteria = {type: "Fiction"}
  let {topic} = req.query;
  if (topic) criteria.topic = topic
  prisma.books.findMany({
    where: criteria, 
    orderBy: {publicationdate: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}
*/
function buildData(req, res){
  pets = buildAnimalDatabase()
  pets.forEach((pet) => {
    prisma.pets.create({data: pet}).catch(error => console.error(error))
  })
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, petTypes, 
  retrieveType, buildData}


