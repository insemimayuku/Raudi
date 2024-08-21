import express from "express";
const app = express();
import db from "./controllers/database/index.js";
new db();
app.listen(8889, () => {
  console.log("Server à l'écoute");
});
