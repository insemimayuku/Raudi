import express from "express";
import vehiculerouter from "./routers/vehicule.js";
import user_router from "./routers/user.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/vehicule", vehiculerouter);
app.use("/user", user_router);
app.listen(process.env.SERVER_PORT || 3002, () => {
  console.log("Server à l'écoute " + process.env.SERVER_PORT || 3002);
});
