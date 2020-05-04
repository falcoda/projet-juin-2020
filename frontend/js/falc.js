function changeHead() {

    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        document.getElementById("head").style.backgroundColor = "whitesmoke";
        document.getElementById("head").style.opacity= "0.95";
    }
    else  {
        document.getElementById("head").style.backgroundColor = "transparent";
    }

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("imgCouv").style.transform = "scale(1.20)";

    }
    else {
        document.getElementById("imgCouv").style.transform = "scale(1)";
    }

}


function zoomeIn(n) {    //zoom lors du passage
    document.getElementsByClassName("zoom")[n].style.transform= "scale(0.90)";
    document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}
function zoomOut(n) {  // dézoom lorsque la souris sort de la photo
    document.getElementsByClassName("zoom")[n].style.transform= "scale(1)";
    document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}

function openModal() {
    document.getElementById('myModal').style.display = "block"; //ouvrir la modal
}

function closeModal() {
    document.getElementById('myModal').style.display = "none"; //fermer la modal
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) { //permet la navigation entre les photos
    showDivs(slideIndex += n);
}

function currentDiv(n) { //permet de sélectionner la photo à ouvrir
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > x.length) {slideIndex = 1} //permet de tourner en boucle
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  //afficher qu'une photo à la fois
    }

    x[slideIndex-1].style.display = "block"; // afficher la photo
//document.getElementById("modalFoot").innerHTML="<p>"+dots[slideIndex-1].alt+"</p>";
captionText.innerHTML = dots[slideIndex-1].alt; //indiquer l'attribut de la photo dans la barre horrizontale

var y = document.getElementsByClassName("myDesc");
for (i = 0; i < x.length; i++) {
    y[i].style.display = "none";  //afficher qu'un texte à la fois

}
y[slideIndex-1].style.display = "block"; //affiche le texte
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
