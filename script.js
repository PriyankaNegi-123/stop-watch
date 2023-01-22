let timeEl = document.getElementById("time");

let seconds = 0;
let counter = null;

// timer logic
function timer(){
    seconds++;
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds - (hrs*3600))/60);
    let secs = Math.floor(seconds%60);
    if(hrs<10){hrs = "0" + hrs};
    if(mins<10){mins = "0" + mins};
    if(secs<10){secs = "0" + secs};
    timeEl.innerText = `${hrs}:${mins}:${secs}`
}

function start(){
    if(counter!=null){
        clearInterval(interval);
    }
    else{
        interval = setInterval(timer, 1000);
    }
}

function stop(){
    clearInterval(interval);
    counter = null;
}

function reset(){
    stop();
    seconds = 0;
    timeEl.innerText = `00:00:00`;
}