const express = require('express');
const app = express();
const mariadb = require('mariadb');




app.listen(3002, () => {
    console.log("Server à l'écoute")
})