// librairie de fonctions utiles
// ChL mai 2015

// ===== fonctions utilitaires (document.getElementById)

function setElem(id, v){
  // place la valeur v dans l'élément id
  document.getElementById(id).innerHTML = v;
}
function addElem(id, v){
  // ajoute la valeur v au contenu de l'élément id
  document.getElementById(id).innerHTML += v;
}   
function getElem(id){
  // renvoie le contenu de l'élément id
  return document.getElementById(id).innerHTML;
} 
function getElemValue(id){
  // renvoie le contenu de l'élément id
  return document.getElementById(id).value;
} 
function setElemValue(id, v){
  // renvoie le contenu de l'élément id
  document.getElementById(id).value = v;
} 
function getEl(id){
  // renvoie la référence de l'élément id
  return document.getElementById(id);
}

// ===== fonctions utilitaires (document.getElementsByTagName)

function getCollTag(name){
  // renvoie la collection ayant le tag name
  return document.getElementsByTagName(name);
}
function getCollElTag(id, name){
  // renvoie la collection ayant le tag name dans l'élément id
  return getEl(id).getElementsByTagName(name);
}

// ===== fonctions XMLHttpRequest

function xhrReqJson(url, fct, id){
// passe la réponse de la requête ajax demandant la ressource url
// à la fonction fct pour l'élément id
  var xhr = new XMLHttpRequest(); // instancier XMLHttpRequest
  xhr.open('get', url, true);  	  // préparer
  xhr.onload =                    // callback : fonction anonyme
    function(){ 
      // invoque fct et formate le résultat json pour l'élément id  
      fct(JSON.parse(xhr.responseText), id); 
    }
  xhr.send()			  // envoyer
}
function xhrReqHtml(url, id, fct){
// place dans l'élément html d'identifiant id
// la réponse de la requête ajax demandant la ressource url
  var xhr = new XMLHttpRequest(); // instancier XMLHttpRequest
  xhr.open('get', url, true);  	  // préparer
  xhr.onload =                    // callback : fonction anonyme
    function(){  
      // place la réponse dans l'élément id
      setElem(id, xhr.responseText);  
      // s'il y a une fonction, l'invoquer  
      if(fct) fct();    
    }
  xhr.send()			  // envoyer
}
function xhrReqAtom(url, fct){
// invoque la fonction fct 
// et lui passe la réponse de la requête ajax demandant la ressource url
  var r;
  var xhr = new XMLHttpRequest(); // instancier XMLHttpRequest
  xhr.open('get', url, true);  	  // préparer
  xhr.onload =                    // callback : fonction anonyme
    function(){  
      // la réponse est atomique (un Array d'un seul objet avec une seule propriété)
      var r = JSON.parse(xhr.responseText)[0]; // le seul objet (le premier)
      r = r[Object.keys(r)];                   // la valeur de sa propriété
      // invoquer fct en lui passant cette valeur
      fct(r);      
    }
  xhr.send()			  // envoyer
}
