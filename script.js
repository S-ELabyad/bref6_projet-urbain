/*server local*/
const _EXPRESS = require('express');
fs = require('fs');
const _APP = _EXPRESS();
const _BODY_PARSER = require('body-parser');
const _PATH = require('path');
const _personne = ""; 
const _PORT = 3003;



_APP.use("/css",express.static("./css"));
_APP.get("/inscription.html",function(req,res){ 
fs.readFile('JSON/client.json', function(erreur, fichier) {
    personne = JSON.parse(fichier);
    console.log(personne);
});
    res.sendFile(__dirname+"/inscription.html");
});
app.get("/contact.html",function(req,res){

    res.sendFile(__dirname+"/contact.html");
});





exports.dataJSON = function(){
    return personne;
    }