function connect() { //fonction d'ajout matériels
    let fo = document.getElementById('form');   //récup du formulaire
    let user = fo.nom.value;
    let psw = fo.psw.value;
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/userConnexion',true); //input dans la ddb
    xhr.onload=function() {
        xhr=JSON.parse(xhr.response);
        for(let i=0; i<xhr.length; i++) {
            if((xhr[i].pseudo==user) & (xhr[i].psw==psw)){
                document.location.href ="ajoutMateriel";
            }
        }
    }
    xhr.send();
    console.log("erreur");
    return false;
}
