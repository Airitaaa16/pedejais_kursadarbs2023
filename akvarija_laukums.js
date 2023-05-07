
function poga (){
    var g, p, izvade;
    g = Number(garums.value);
    p = Number(platums.value);
    if(isNaN(g) || isNaN(p)) {
        izvade = "Kļūda datu ievadē.";
    }
    else {
        izvade = "Akvārija laukums ir" + g * p + ".";

    }
    rezultāts.innerHTML = izvade;
}
