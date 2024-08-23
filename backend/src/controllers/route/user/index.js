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
async function login(req, res) {
  const conn = new db();
  const { email, password } = req.body;
  const data = await conn.login({ email, password });
  if (data && data.id) {
    const token = await GenerateToken(data.id);
    res.status(200).json({
      message: "Connexion réussie",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Email ou mot de passe incorrect",
    });
  }
}
export { getAlluser, createUser, updateUser, deleteUser, login };
