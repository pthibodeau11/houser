require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const express = require("express");
const massive = require("massive");
const controller = require("./controller");
const app = express();
const PORT = 4000;

//MASSIVE setup
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance); // this saves dbInstance on app under name of db
    console.log("Database connected yo!");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

// ENDPOINTS GO HERE
app.get("/api/listings", controller.getHouses);
app.post("/api/house", controller.createHouse);
app.delete("/api/house/:id", controller.deleteHouse);

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
