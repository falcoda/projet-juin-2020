/**
    ajoute le matériel passer par un formulaire
    @auteur Marting Lenoir Diego he201772
    @return {boolean} false
  **/
function ajout() { //fonction d'ajout matériels
    let fo = document.getElementById('form');   //récup du formulaire
    let selectElmt = document.getElementById("catego");  //récup des catégories
    let valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].id;  //récup la catégories sélectionner
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/ajout?nom='+fo.nom.value+'&description='+fo.description.value+'&id_categorie='+valeurselectionnee,true); //input dans la ddb
    xhr.send();
    document.getElementById('envoyer').innerHTML = 'matériel bien envoyé';
    fo.nom.value=''; //remise à zéro du formulaire
    fo.description.value='';
    return false;
}
