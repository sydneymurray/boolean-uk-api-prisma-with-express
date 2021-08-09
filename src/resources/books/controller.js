let  {buildBooksDatabase} = require("../utils/mockData")
let prisma = require("../utils/connectDb")

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
  console.log("Type is :- " + (typeof id) )
  if (typeof id - id !== 0) res.json({msg:"Page Not Found"})
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

function retrieveFiction(req, res){
  let criteria = {type: "Fiction"}
  let {topic} = req.query;
  if (topic) criteria.topic = topic
  prisma.books.findMany({
    where: criteria, 
    orderBy: {publicationdate: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveNonFiction(req, res){
  let criteria = {type: "Non-Fiction"}
  let {topic} = req.query;
  if (topic) criteria.topic = topic
  prisma.books.findMany({
    where: criteria, 
    orderBy: {publicationdate: "desc"}})
    .then(dbResponse => res.json(dbResponse))
}

function byAuthor(req, res){
  let author = req.params.name;
  prisma.books.findMany({
    where: {author}, 
    orderBy: {publicationdate: "desc"}})
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

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, 
  retrieveFiction, retrieveNonFiction, byAuthor, buildData}


