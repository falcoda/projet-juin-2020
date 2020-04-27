let tablObj ;
function chargerObj(){
    let xhr = new XMLHttpRequest(); //requete a la db
    xhr.open("get",'http://localhost:82/creation', true);  //recupère un tableau d'objet
    xhr.onload=function () {
                xhr= JSON.parse(xhr.response);  //transformation en tableau d'objet
                tablObj= xhr.slice(); //copie
        createHtml(xhr);
    };
    xhr.send(); //envois


}

function createHtml(tabl) { //creation de l'html
    let html = "";
    let position= 0;      //initialisation des variables
    let count = 1;
    let hauteur=0;
    for(let i in tabl){  //boucle dans le tableau

        if (i%2 ===0){  //si pair ajoute l'image de droite
            html += "<div class='group2'> <div class='collection' onmouseout='zoomOut("+i+")' onmouseover='zoomeIn("+i+")' onclick='openModal();currentDiv("+count+")' style='  position: absolute; right:50%; top:"+position+"px;width: 210px; height: 400px; '>"+
                "<img src='img/"+tabl[i].nom+".jpg' alt='"+tabl[i].nom+"' style='width:80%; height:80%; object-fit: scale-down' class='zoom'>"+
                "<div class='product-description' >"+
                "<p class='label' >"+tabl[i].nomCateg+"</p>"+
                "<p class='nomProd'>"+tabl[i].nom+"</p>"+
                "</div></div>" ;
        }
        else{ //si impair ajoute l'image de gauche
            html += "<div class='collection' onmouseout='zoomOut("+i+")' onmouseover='zoomeIn("+i+")' onclick='openModal();currentDiv("+count+")'  style=' position: absolute; top:"+position+"px;width: 210px; height: 400px; '>"+
                "<img src='img/"+tabl[i].nom+".jpg' alt='"+tabl[i].nom+"' style='width:80%; height:80%; object-fit: scale-down' class='zoom'>"+
                "<div class='product-description' >"+
                "<p class='label' >"+tabl[i].nomCateg+"</p>"+
                "<p class='nomProd'>"+tabl[i].nom+"</p>"+
                "</div></div></div>" ;
            position += 460; // permet depositionner les immages à la bonne hauteur

        }// le système de if/ else permet d'avoir les deux images centrées les une à coté de l'autre
        count+=1;
        hauteur +=250 ; //augmente la hauteur de la div en fonction du nombre de produits
    }
    document.getElementsByClassName("collectionAll")[0].style.height = hauteur+"px";  //permet d'ajuster la hauteur
    document.getElementsByClassName("collectionAll")[0].innerHTML=html;  //remplace le html présent par celui crée
    createModal(tabl); //appèle la fonction pour créer les modales
}

function chargerCateg(id) {  //créer la liste des catégories en fonctions de la db
    let xhr =new XMLHttpRequest(); //création d'une nouvelle requète
    xhr.open("get","http://localhost:82/categorie", true);  //demande une liste des catégories
    xhr.onload = function(){
        xhr= JSON.parse(xhr.response); //transformation en tableau d'objets
        let categori = "";
        for(let i in xhr){  //boucle sur le tableau d'objet
            categori += "<option value='"+xhr[i].categorie+"' id='"+xhr[i].id_categorie+"'>"+xhr[i].categorie+"</option>";  //creations des options de la liste déroulante
        }
        document.getElementById(id).innerHTML += categori  //ajout dans le html des options

    };
    xhr.send();  //envois
}

function tri(){   //fonction permettant d'afficher que certaines catégories
    let tablObj2 = tablObj.slice(); //copie du tableau

    let count = 0;  // initialisation d'un compteur
    if (document.getElementById("categ").value ==="Tout"){  //regarde si l'option tout est sélectionnée
        createHtml(tablObj2)  //si oui affiche tout
    }
    else{
        for(let i in tablObj) {  //boucle dans le tableau
            if (document.getElementById("categ").value !== tablObj[i].nomCateg) {  //regarde si l'onglet sélectionné es différent de l'élément i du tableau
                tablObj2.splice(count,1); // si différent le retire
                count -= 1 ; //retire le count car un élément est supprimé

            }
            count+=1;  // count +1 après une boucle
        }

        createHtml(tablObj2);  //création de l'html avec la fonction précédente
        createModal(tablObj2);
    }

}

function createModal(tabl){  //création de la modal en fonction de la db
    let html=" <div class='modalContent'>"+
        "<span class='modalFermer' onclick='closeModal()' style='cursor:pointer'>X</span>"+
        "<div class='modalTop' style='max-width:500px'>"; //initialisation d'une variable
    let html2 = "";
    for(let i in tabl){ //bouclage sur le tableau d'objet
        html += "<img class='mySlides demo '' src='img/"+tabl[i].nom+".jpg' style='width:20%;' alt='"+tabl[i].nom+"'>";
        html2 += "<p class='myDesc'>"+tabl[i].description+"</p>";  //créer les différentes modal sur bases des éléments du tableau
    }

    html +="</div><!-- Fin modal top --> <div class='navBarLR'> <p id='caption'></p>"+
        "<span class='modalLNav fleche' onclick='plusDivs(-1)'><</span>"+
        "<span class='modalRNav fleche' onclick='plusDivs(1)'>></span> </div><!-- Fin modal nav --> <div id='modalFoot'>"; //navigation entre les modals


     html += html2 +"</div></div>";
    document.getElementById("myModal").innerHTML = html ; //insersion dans le html

}
function ajout() {
    let fo = document.getElementById('form');
    let selectElmt = document.getElementById("catego");
    let valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].id;
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/ajout?nom='+fo.nom.value+'&description='+fo.description.value+'&id_categorie='+valeurselectionnee,true);
    xhr.send();
    document.getElementById('envoyer').innerHTML = 'matériel bien envoyé';
    fo.nom.value='';
    fo.description.value='';
    return false;
}