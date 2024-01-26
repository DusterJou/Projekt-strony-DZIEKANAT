let txt="To jest ruchomy tekst...";
let TimeID=0;
function ruchomytekst() {
    let eleTxt= document.getElementById("rTekst");
    txt = eleTxt.value;
    txt=txt.substring(1)+txt.charAt(0);
    
    //alert(txt);
    eleTxt.value=txt;
    clearTimeout(TimeID);
    TimeID = setTimeout(ruchomytekst,200); 
}
function stopTekst(){
    clearTimeout(TimeID);
}


// function I(){document.write("setInterval <br>");}
// function T(){document.write("setTimeout <br>");}

// setInterval(I,2000);
// setTimeout(T,5000);


function podmienKlase(obiektID, klasa) {
    let element = document.getElementById(obiektID);
    element.className= klasa;
}