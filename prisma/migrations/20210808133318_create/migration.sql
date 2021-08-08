-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "topic" VARCHAR(255) NOT NULL,
    "publicationdate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "microchip" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
