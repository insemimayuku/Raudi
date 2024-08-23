import express from "express";
const user_router = express.Router();
import {
  createUser,
  updateUser,
  deleteUser,
  login,
} from "../controllers/route/user/index.js";
user_router.put("/update", updateUser);
user_router.delete("/delete", deleteUser);

user_router.post("/register", createUser);
user_router.get("/login", login);

export default user_router;
