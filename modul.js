var http = require('http');

module.exports = {
    valutaDkktoEuro: dkkToEuro,
    valutaEurotoDKK: euroToDkk

}

function dkkToEuro(DKK){
   var euro = (DKK / 7.46);
    console.log("Du har modtaget "+ euro + " euro, fra "+ DKK + " dkk.");
}
function euroToDkk(euro){
    var dkk = (euro * 7.46);
    console.log("Du har modtaget "+dkk+" DKK, fra " + euro + " euro.")
}