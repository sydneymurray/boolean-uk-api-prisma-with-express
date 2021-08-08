const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

let  {buildBooksDatabase} = require("../utils/mockData")


function createOne(req, res){
  let book = {...req.body}
  book.publicationdate = new Date(book.publicationDate)
  delete book.publicationDate
  prisma.books.create({data: book})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.books.findMany({ 
    orderBy: {publicationdate: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  prisma.books.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.books.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let book = req.body
  prisma.books.update({where: {id}, data: book})
    .then(dbResponse => res.json(dbResponse))
}

function buildData(req, res){
  books = buildBooksDatabase()
  books.forEach((book) => {
    book = {...book, publicationdate: new Date(book.publicationDate)}
    delete book.publicationDate
    prisma.books.create({data: book}).catch(error => console.error(error))
  })
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, buildData}


