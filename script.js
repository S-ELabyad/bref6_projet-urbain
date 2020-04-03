/*server local*/
var express = require("express"),
fs = require('fs'),
app = express(),
personne = "",
http = require("http").Server(app).listen(80);
app.use("/css",express.static("./css"))
app.use("/Traitement",express.static("./Traitement"))
app.use("/img",express.static("./img"))
app.get("/inscription.html",function(req,res){ 
fs.readFile('JSON/client.json', function(erreur, fichier) {
    personne = JSON.parse(fichier);
    console.log(personne);
});
    res.sendFile(__dirname+"/inscription.html");
})
app.get("/contact.html",function(req,res){

    res.sendFile(__dirname+"/contact.html");
});

exports.dataJSON = function(){
    return personne;
    }