function connexion() { //fonction d'ajout matériels
    let fo = document.getElementById('form');   //récup du formulaire
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/userConnexion',true); //input dans la ddb
    xhr.onload=function() {
        xhr=JSON.parse(xhr.response);
        console.log(xhr);
    }
    xhr.send();
    return false;
}
