import db from "../../database/index.js";
import { GenerateToken } from "../../auth/index.js";
function getAlluser(req, res) {
  const conn = new db();
  conn
    .getAllUser()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "oops le serveur a rencontré un problème",
      });
    });
}
function createUser(req, res) {
  const { nom, prenom, email, password } = req.body;
  if (!nom || !prenom || !email || !password) {
    res.status(400).json({
      message: "Veuillez remplir tous les champs",
    });
    return;
  }
  const conn = new db();
  conn
    .createUser({ nom, prenom, email, password })
    .then(async (data) => {
      if (data.id) {
        const token = await GenerateToken(data.id);
        res.status(200).json({
          message: "Utilisateur créé avec succès",
          token: token,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "oops le serveur a rencontré un problème",
      });
    });
}
function updateUser(req, res) {
  const conn = new db();
  const { id, nom, prenom, email, password } = req.body;
  conn
    .updateUser({ id, nom, prenom, email, password })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "oops le serveur a rencontré un problème",
      });
    });
}
function deleteUser(req, res) {
  const conn = new db();
  const { id } = req.body;
  conn
    .deleteUser({ id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "oops le serveur a rencontré un problème",
      });
    });
}
function login(req, res) {
  const conn = new db();
  const { email, password } = req.body;
  conn
    .login({ email, password })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "oops le serveur a rencontré un problème",
      });
    });
}
export { getAlluser, createUser, updateUser, deleteUser, login };
