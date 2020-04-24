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