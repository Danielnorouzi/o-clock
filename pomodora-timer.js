function startClock() {
    var StartingButton = document.getElementById('startButton');
    var x = document.getElementById("notificationAudio");

    if (intervalId) {
      clearInterval(intervalId);
    }
  
    if(currenttime !== 0){
        StartingButton.style.display = 'none';
        refreshButton.style.display = 'block';
        pomodoraIconId.style.display = 'none';
        breakIconId.style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block'; 
        intervalId = setInterval(function() {
        if (!isPaused) {
            updateTime()
          if (currenttime <= 0) {
            x.play();
          } else {
            currenttime--;
          }
        }
      }, 1000);
    }

  }

  function pauseClock() {
    isPaused = !isPaused; // Toggle pause state
    var pauseButton = document.getElementById('pauseButton');
    pauseButton.value = isPaused ? 'resume' : 'pause'; // Update button text
  }

  function pomodoraIconChoice(){
    currenttime = pomodratime;
    updateTime();
}

  function breakIconChoice(){
    currenttime = breaktime;
    updateTime();
  }

  function updateTime(){
    var minutes = Math.floor((currenttime % 3600) / 60);
    var seconds = currenttime % 60;
    document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";
  }


  function reloadPage() {
    location.reload();
  }

var pomodoraIconId = document.getElementById('firstButtonId');
var breakIconId =document.getElementById('secondButtonId');
var currenttime = 1500;
var pomodratime = 1500;
var breaktime = 300;
var isPaused = false;
var intervalId;


var refreshButton = document.getElementById('resetButton');
refreshButton.style.display = 'none';
document.getElementById('pauseButton').style.display = 'none';
updateTime();
pomodoraIconId.style.display = 'block';
breakIconId.style.display = 'block';