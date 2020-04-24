function chargerObj(){
    let xhr = new XMLHttpRequest();
    xhr.open("get",'http://localhost:82/creation', true);
    xhr.onload=function () {
        console.log(xhr.response);
        xhr= JSON.parse(xhr.response);
        console.log(xhr);
        createHtml(xhr);
    };
    xhr.send();

}

function createHtml(tabl) {
    let html = "";
    let position= 0;
    let count = 1;
    for(let i in tabl){
        console.log(i);
        if (i%2 ===0){
            html += "<div class='group2'> <div class='collection' onmouseout='zoomOut("+i+")' onmouseover='zoomeIn("+i+")' onclick='openModal();currentDiv("+count+")' style='z-index:3;  position: absolute; right:50%; top:"+position+"px;width: 210px; height: 400px; '>"+
                "<img src='img/"+tabl[i].nom+".jpg' alt='"+tabl[i].nom+"' style='width:80%; height:80%; object-fit: scale-down' class='zoom'>"+
                "<div class='product-description' >"+
                "<p class='label' >"+tabl[i].nomCateg+"</p>"+
                "<p class='nomProd'>"+tabl[i].nom+"</p>"+
                "</div></div>" ;
        }
        else{
            html += "<div class='collection' onmouseout='zoomOut("+i+")' onmouseover='zoomeIn("+i+")' onclick='openModal();currentDiv("+count+")' style='position: absolute; top:"+position+"px;width: 210px; height: 400px; '>"+
                "<img src='img/"+tabl[i].nom+".jpg' alt='"+tabl[i].nom+"' style='width:80%; height:80%; object-fit: scale-down' class='zoom'>"+
                "<div class='product-description' >"+
                "<p class='label' >"+tabl[i].nomCateg+"</p>"+
                "<p class='nomProd'>"+tabl[i].nom+"</p>"+
                "</div></div></div>" ;
            position += 460;

        }
        count+=1
    }
    console.log(html);
    document.getElementsByClassName("collectionAll")[0].innerHTML+=html;
}

