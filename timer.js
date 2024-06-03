

function startClock() {
  var InputClock = document.getElementById('inputClock');
  var StartingButton = document.getElementById('startButton');
  console.log(secsValue);
  console.log(minsValue);
  console.log(hoursValue);
  var distance = secsValue + (60 * minsValue) + (3600 * hoursValue);

  // Clear the existing interval if it exists
  if (intervalId) {
    clearInterval(intervalId);
  }

  if(distance !== 0){
    InputClock.style.display = 'none';
    StartingButton.style.display = 'none';
    refreshButton.style.display = 'block';
    document.getElementById('pauseButton').style.display = 'block'; // Show pause button
    document.getElementById("demo").innerHTML = "Loading...";
  
    // Set a new interval and store its ID in intervalId
    intervalId = setInterval(function() {
      if (!isPaused) {
        var hours =Math.floor(distance / 3600);
        var minutes = Math.floor((distance % 3600) / 60);
        var seconds = distance % 60;
        var x = document.getElementById("myAudio");
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        if (distance <= 0) {
          clearInterval(intervalId); // Clearing the interval once countdown is finished
          document.getElementById("demo").innerHTML = "Have a rest";
          x.play();
        } else {
          distance--; // Decrement the distance by 1 second
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

function houradded() {
  hoursValue++;
  if (hoursValue > 23) {
    hoursValue = 0;
  }
  document.getElementById("hourInputDisplay").innerHTML = hourArray[hoursValue];
}

function hourRemoved() {
  hoursValue--;
  if (hoursValue < 0) {
    hoursValue = (hourArray.length - 1)
  }
  document.getElementById("hourInputDisplay").innerHTML = hourArray[hoursValue];
}

function minadded() {
  minsValue++;
  if (minsValue > 58) {
    minsValue = 0;
  }
  document.getElementById("minuteInputDisplay").innerHTML = MinuteArray[minsValue];
}

function minRemoved() {
  minsValue--;
  if (minsValue < 0) {
    minsValue = (MinuteArray.length - 1)
  }
  document.getElementById("minuteInputDisplay").innerHTML = MinuteArray[minsValue];
}

function secadded() {
  secsValue++;
  if (secsValue > 58) {
    secsValue = 0;
  }
  document.getElementById("secondInputDisplay").innerHTML = secondArray[secsValue];
}

function secRemoved() {
  secsValue--;
  if (secsValue < 0) {
    secsValue = (secondArray.length - 1)
  }
  document.getElementById("secondInputDisplay").innerHTML = secondArray[secsValue];
}

function reloadPage() {
  location.reload();
}

var hoursValue = 0;
var minsValue = 0;
var secsValue = 0;
var secondArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var MinuteArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var hourArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var intervalId;
var pageURL = window.location.href;
var refreshButton = document.getElementById('resetButton');
var isPaused = false;

document.getElementById("secondInputDisplay").innerHTML = secondArray[secsValue];
document.getElementById("minuteInputDisplay").innerHTML = MinuteArray[minsValue];
document.getElementById("hourInputDisplay").innerHTML = hourArray[hoursValue];
refreshButton.style.display = 'none';
document.getElementById('pauseButton').style.display = 'none'; // Hide pause button initially