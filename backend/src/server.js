import express from "express";
const app = express();
import db from "./controllers/database/index.js";
const test = new db();
test
  .createVehicule({
    marque: "Mercedes 1",
    nombre_de_portes: 4,
    nombre_de_places: 5,
    type_de_carburant: "Essence",
    annee: 2021,
    options: ["Climatisation", "GPS"],
  })
  .then((data) => {
    console.log(data);
  });

app.listen(3002, () => {
  console.log("Server à l'écoute");
});
