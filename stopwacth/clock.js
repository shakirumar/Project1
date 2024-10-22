let watchdisplay = document.querySelector('.watchdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;

startbtn.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function(){
   clearInterval(timerid);
   
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerid);
    watchdisplay.innerHTML = `00 : 00 : 00` ;
    msec = secs = mins = 00;
    
 });
 

function startTimer(){
    msec++
    if (msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    watchdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}