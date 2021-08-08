const express = require("express");                 // middleware routing framework app.use()
const morgan = require("morgan");                   // middleware logger 
const bodyParser = require("body-parser");          // Enables JSON requests & responses

const booksRouter = require("./resources/books/router")
const petsRouter = require("./resources/pets/router")


/* IMPORT ROUTERS */
const app = express();

/* SETUP MIDDLEWARE */
app.use(morgan("dev"));
//app.use(express.json())
app.use(bodyParser.json());

/* SETUP ROUTES */
app.use("/books", booksRouter)
app.use("/pets", petsRouter)

/* CATCH-ALL TO TEST ROUTES */
app.get("*", (req, res) => {
  res.json( {msg:"All request message"});
});

/* START SERVER */
const port = 3100;
app.listen(port, () => {
/*
  db.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");

    }
  }
  );
  */
  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
