
// const data= new Date('January 1, 1970 0:0:0 GMT+00:00');
// console.log(data.toDateString());
// console.log(data.toTimeString());
// console.log(data.getTime());

function zegar(){
    const teraz= new Date();
    let godzina= teraz.getHours();
    let minuta= teraz.getMinutes();
    let sekunda= teraz.getSeconds();
    let czas= "";
    //if(godzina>12) godzina=godzina-12; else godzina=godzina;
     // (war)? T:F  // operator warunkowy
    czas+= (godzina>12)? godzina-12 : godzina;
    czas+= ((minuta<10)? ":0" : ":") + minuta;   // 3:04
    czas+= ((sekunda<10)? ":0":":") + sekunda;   //3:05:01
    czas+= ":"+teraz.getMilliseconds();
    czas+= (godzina>=12)? " PM": " AM";  //3:05:01 PM

    let eleZeg= document.getElementById("tZegar");
    eleZeg.value=czas;
    setTimeout(zegar,1);
}

let sek=0, milisek=0;
let timerID=null;

function stoper(){  // 100 ms
    if(milisek>=9) {
        sek++;
        milisek=0;
    }
    else{
        milisek++;
    }
    let elemStoper= document.getElementById("tStoper");
    elemStoper.value=`${sek}.${milisek}`;
}
let d=true;
function startStoper(){
    if(d){
    timerID = setInterval(stoper, 100);
    }
    d=false;
    //console.log(timerID);
}

function stopStoper(){
    //alert(timerID);
    clearInterval(timerID);
    d=true;
    }
 
let elSStart;//, elSStop;


window.onload = function(){
    zegar(); 
    elSStart = document.getElementById("btnstoperStart");
    elSStart.addEventListener("click",startStoper);

    // elSStop = document.getElementById("btnstoperStop");
    // elSStop.addEventListener("click",stopStoper);
}
