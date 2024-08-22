const db = require('../database/database')

exports.getUser = async (req, res) => {
    try{
        console.log("lancement de la requête d'affichage")
        const rows = await db.pool.query('Select * from user');
        console.log(rows);
        res.status(201).json(rows)
    }
    catch(err){
        console.log(err);
    }
};

exports.getUser = async (req,res) =>{
    //...
}