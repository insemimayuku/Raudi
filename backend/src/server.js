import express from "express";
const app = express();

/* import db from "../src/controllers/database/index.js";
const dbconn = new db();
dbconn.getUserByEmail("nagulan77fr@icloud.com").then((data) => {
  console.log(data);
}); */

app.listen(3002, () => {
  console.log("Server à l'écoute");
});
