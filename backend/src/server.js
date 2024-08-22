import express from "express";
const app = express();

/*import db from '../src/controllers/database/index.js'
const dbconn = new db();
dbconn.init();*/


app.listen(3002, () => {
  console.log("Server à l'écoute");
});
