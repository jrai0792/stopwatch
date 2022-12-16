let startBtn = document.getElementById("btn-start");
let stopBtn = document.getElementById("btn-stop");
let resetBtn = document.getElementById("btn-reset");



let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

startBtn.addEventListener('click', function() {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener('click', function() {
  timer = false;
});

resetBtn.addEventListener('click', function() {
  timer = false;
  count=0;
  hr=0;
  min=0;
  sec=0;
  
  document.getElementById('hour').innerHTML = `00`;
  document.getElementById('minute').innerHTML =`00`;
  document.getElementById('second').innerHTML = `00`;

});

function stopWatch() {
  console.log("hello");
  console.log(count);
  console.log(timer);
  if(timer) {
    count ++;
    
    if(count == 100) {
      sec++;
      count = 0;
    }
    if(sec == 60) {
      min++;
      sec=0;
    }
    if(min == 60) {
      hr++;
      min=0;
      sec=0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;

    if(hr < 10){
      hrString = `0${hrString}`;
    }
    if(min<10){
      minString = `0${minString}`;
    }
    if(sec<10) {
      secString = `0${secString}`;
    }

    document.getElementById('hour').innerHTML = hrString;
    document.getElementById('minute').innerHTML =minString;
    document.getElementById('second').innerHTML = secString;
    setTimeout(stopWatch, 10);
  }
}