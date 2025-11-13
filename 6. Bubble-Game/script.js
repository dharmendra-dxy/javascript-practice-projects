let timer = 60;
let score = 0;
let randomHit;

// function createBubble:
function createBubble(){

    let clutter="";

    for(let i=1; i<97; i++){
        let random  = Math.floor(Math.random()*10 );
        clutter +=`<div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;

}


// running the timer:
function runTimer(){

    let timerInt = setInterval(function(){

        if(timer>0){
            timer--;
            document.querySelector("#timer").innerText = timer;
        } 
        else{
            clearInterval(timerInt);
            // clearing bubble when timers end:
            document.querySelector("#pbtm").innerHTML = `<h1> Game END </h1>`;
        }
        
    },1000);

}

// function getNewHit:
function getNewHit(){

    randomHit = Math.floor( Math.random()*10 );
    document.querySelector("#hit").innerText = randomHit;

}

// function increaseScore:
function increaseScore(){
    score += 10;
    document.querySelector("#score").innerText = score;
}

document.querySelector("#pbtm").addEventListener("click", function(e){
    // console.log(Number(e.target.innerText));
    let targetNum = e.target.innerText;

    if(targetNum == randomHit){
        // call increaseScore(), getNewHit() and createBubble():
        increaseScore();
        createBubble()
        getNewHit();

    }


}, false);

getNewHit();
runTimer();
createBubble();


