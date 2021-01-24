const dino =document.getElementsByClassName ("dino");
const cactus=document.getElementsByClassName("cactus");

function jump (){
    if(dino.classList != "jump"){
dino.classList.add("jump");
setTimeout(function () {
    dino.classList.remove ("jump");
  }, 300);
 } 
}

let isalive =setInterval (function(){

let dinotop= window.getComputedStyle(dino).getPropertyValue("top");

let cactusleft= parseInt(window. getComputedStyle (cactus).getPropertyPriorit("left"));

if (cactusleft<50 && cactusleft>0 && dinotop>=140)
 alert("fim de jogo");




} ,10);
 document.addEventListener("keydown", function(event){
 
jump();

 });


 
