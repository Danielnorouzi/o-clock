function start() {
  var DoubleDigitNumberArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];



  var startButonJS = document.getElementById("startButton");
  var time = 0; 
  startButonJS.style.display= "none";
  PauseButonJS.style.display= "block";
  ResettButonJS.style.display= "block";
  setInterval(function() {
    if (!isPaused) {
    time++;
      var hours =Math.floor(time / 3600);
      var minutes = Math.floor((time % 3600) / 60);
      var seconds = time % 60
      if(hours > 59){
        document.getElementById("timer").innerHTML = hours + ":" + DoubleDigitNumberArray[minutes] + ":" + DoubleDigitNumberArray[seconds] ;
      }else{
        document.getElementById("timer").innerHTML = DoubleDigitNumberArray[hours] + ":" + DoubleDigitNumberArray[minutes] + ":" + DoubleDigitNumberArray[seconds] ;
      }
    }
  }, 1000);


}

function reloadPage() {
  location.reload();
}

function pauseClock() {
  isPaused = !isPaused; // Toggle pause state
  var pauseButton = document.getElementById('pauseButton');
  pauseButton.value = isPaused ? 'resume' : 'pause'; // Update button text
}

var PauseButonJS = document.getElementById("pauseButton");
var ResettButonJS = document.getElementById("resetButton");
var isPaused = false;
var intervalId;
PauseButonJS.style.display= "none";
ResettButonJS.style.display= "none";