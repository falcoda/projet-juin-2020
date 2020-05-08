function changeHead() { // animation visuelles au niveau de la photo de couverture et de  la barre d'état

    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) { //lorsqu'on descend de 45px
        document.getElementById("head").style.backgroundColor = "whitesmoke";
        document.getElementById("head").style.opacity= "0.95";
    }
    else  {                                                                             //quand on remonte
        document.getElementById("head").style.backgroundColor = "transparent";
    }

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {  //lorsqu'on descend de 180 px
        document.getElementById("imgCouv").style.transform = "scale(1.20)";  //augmenter l'échelle

    }
    else {                                                                                 //quand on remonte
        document.getElementById("imgCouv").style.transform = "scale(1)";
    }

}


function zoomeIn(n) {    //zoom lors du passage sur les images
    document.getElementsByClassName("zoom")[n].style.transform= "scale(0.90)";
    document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}
function zoomOut(n) {  // dézoom lorsque la souris sort de la photo
    document.getElementsByClassName("zoom")[n].style.transform= "scale(1)";
    document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}

function openModal() { //ouvre la modal = l'affiche
    document.getElementById('myModal').style.display = "block"; //ouvrir la modal

}

function closeModal() { //ferme la modal = la ferme
    document.getElementById('myModal').style.display = "none"; //fermer la modal
}

if((document.getElementsByClassName("mySlides")[0]) !== undefined) { //evite une erreur au chargement de la page (car modal pas encore crée)
    let slideIndex = 1;
    showDivs(slideIndex);
}

function plusDivs(n) { //permet la navigation entre les photos
    showDivs(slideIndex += n);
}

function currentDiv(n) { //permet de sélectionner la photo à ouvrir
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > x.length) {
        slideIndex = 1
    } //permet de tourner en boucle
    if (n < 1) {
        slideIndex = x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  //afficher qu'une photo à la fois
    }

    x[slideIndex - 1].style.display = "block"; // afficher la photo
    captionText.innerHTML = dots[slideIndex - 1].alt; //indiquer l'attribut de la photo dans la barre horrizontale

    let y = document.getElementsByClassName("myDesc");
    for (let i = 0; i < x.length; i++) {
        y[i].style.display = "none";  //afficher qu'un texte à la fois

    }
    y[slideIndex - 1].style.display = "block"; //affiche le texte
}

