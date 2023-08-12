var timer = 60;     
var Score = 0;
var hitrn = 0;

function increaseSCore(){
    Score += 10;
    document.querySelector("#scoreval").textContent = Score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
} 

function makebubble(){
    var clutter = "";

for( var i = 1; i<=168; i++){
      var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
      var timerintl = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(timerintl);
        document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
    }
   }, 1000);
}



document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseSCore();
        makebubble();
        getNewHit();
    }
});

runTimer();
makebubble();
getNewHit();
