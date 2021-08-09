let  {buildBooksDatabase} = require("../src/resources/utils/mockData")
let {PrismaClient} = require("@prisma/client")
let prisma = new PrismaClient()

async function seed(){
  let books = buildBooksDatabase()
  console.log("Seed Books:- " + books)
  books.forEach(async (book) => await prisma.book.create({data: book}).catch(error => console.error(error)))
}

seed().finally(async () => await prisma.$disconnect)

module.exports = seed

/*
npx prisma db seed --preview-feature  // from command line
npx prisma studio
npx prisma migrate reset  // DANGER DANGER DANGER

*/