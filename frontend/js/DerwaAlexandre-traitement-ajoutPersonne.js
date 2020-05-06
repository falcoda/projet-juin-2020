function ajoutPersonne(formulaire){
    let xhr = new XMLHttpRequest();
    xhr.open('get',"http://localhost/ajoutPersonne?nom=" + formulaire["nom"].value + "&prenom=" + formulaire["prenom"].value
        + "&mail=" + formulaire["email"].value + "&mp=" + formulaire["message"].value , true);
    xhr.send();
    return false;
}