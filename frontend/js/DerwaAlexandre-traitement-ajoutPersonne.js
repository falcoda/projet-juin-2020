/**
    Récupère les valeurs qu'un utilisateur du site à entré et envoyé via le formulaire
    Envois les valeurs vers la base de donnée Sybase via un xhr
    @auteur Alexandre derwa he201886
    @param {HTMLForms} formulaire html (this)
    @return {boolean} false
 **/
function ajoutPersonne(formulaire){

    document.getElementById("verif").innerHTML = "formulaire soumis";
    let xhr = new XMLHttpRequest();
    if (formulaire["choixProduit"].value==="null"){
        xhr.open('get', "http://localhost/ajoutPersonne?nom=" + formulaire["nom"].value + "&prenom=" + formulaire["prenom"].value
            + "&mail=" + formulaire["email"].value + "&mp=" + formulaire["message"].value, true);
    }
    else {
        xhr.open('get', "http://localhost/ajoutPersonne?nom=" + formulaire["nom"].value + "&prenom=" + formulaire["prenom"].value
            + "&mail=" + formulaire["email"].value + "&mp=" + formulaire["message"].value + "&article=" + formulaire["choixProduit"].value, true);
    }
    xhr.send();
    formulaire["nom"].value ="";
    formulaire["prenom"].value ="";
    formulaire["email"].value ="";
    formulaire["message"].value ="";
    return false;
}