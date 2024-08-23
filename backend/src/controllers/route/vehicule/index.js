import db from "../../database/index.js";
function getAllvehicule(req, res) {
  const conn = new db();
  conn
    .getAllVehicule()
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

export { getAllvehicule };
