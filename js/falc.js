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
/* pour zoomer la photo lors  du survol
document.getElementsByClassName("collection").addEventListener("hover",function(){
    document.getElementsByClassName("zoom").style.transform= "scale(0.90)";
});
*/

function zoome() {
    console.log(this);
}

