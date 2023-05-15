
function laukums (){
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


function tilpums (){
    var g, p, izvade;
    g = Number(garums.value);
    p = Number(platums.value);
    a = Number(augstums.value);
    if(isNaN(g) || isNaN(p) || isNaN (a)) {
        izvade = "Kļūda datu ievadē.";
    }
    else {
        izvade = "Akvārija tilpums ir" + g * p * a + ".";

    }
    rezultāts.innerHTML = izvade;
}

