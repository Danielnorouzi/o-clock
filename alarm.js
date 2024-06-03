

function startClock() {
    var InputClock = document.getElementById('inputClock');
    var StartingButton = document.getElementById('startButton');
    var alarmTime = hours + ":" + minutes  ;
    var hours = hoursValue
    var minutes = minsValue
   
    var x = document.getElementById("myAudio");
    var currentTime = 0;
    console.log(minsValue);
    console.log(hoursValue);
    
    cancelButtondocument.style.display= "block";
    alarminfo.style.display= "block";
    document.getElementById("demo").innerHTML = hourArray[hoursValue]+":"+ MinuteArray[minsValue]+" " + midayarray[midayvalue];


    // Clear the existing interval if it exists
    if (intervalId) {
      clearInterval(intervalId);
    }
  
    if((hours !== 0) || (minutes !== 0)){
        InputClock.style.display = 'none';
        StartingButton.style.display = 'none';

        // Set a new interval and store its ID in intervalId





        if(midayvalue == 1){

            hours = hours + 12;
            alarmTime = hours + ":" + minutes  ;
        }
        console.log(alarmTime);
        console.log(midayvalue);        
        setInterval(function() {   
            var currentTimeData = new Date();
            let hour = currentTimeData.getHours();
            let minute = currentTimeData.getMinutes();
            currentTime = (hour + ":" + minute);
            console.log(currentTime);
            if(currentTime == alarmTime){
                document.getElementById("demo").innerHTML = "Done";
                x.play();
            }},1000)
    }



    
  
    
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
  
  function midadded() {
    midayvalue++;
    if (midayvalue > 1) {
        midayvalue = 0;
    }
    document.getElementById("ZoneInputDisplay").innerHTML = midayarray[midayvalue];
  }
  
  function midRemoved() {
    midayvalue--;
    if (midayvalue < 0) {
        midayvalue = (midayarray.length - 1)
    }
    document.getElementById("ZoneInputDisplay").innerHTML = midayarray[midayvalue];
  }
  
  function reloadPage() {
    location.reload();
  }
  
  var hoursValue = 0;
  var minsValue = 0;
  var midayvalue = 0;
  var midayarray = ["AM", "PM"]
  var MinuteArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
  var hourArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12];
  var intervalId;
  var cancelButtondocument = document.getElementById('cancelbutton');
  var alarminfo =  document.getElementById('demo');

  
  document.getElementById("ZoneInputDisplay").innerHTML = midayarray[midayvalue];
  document.getElementById("minuteInputDisplay").innerHTML = MinuteArray[minsValue];
  document.getElementById("hourInputDisplay").innerHTML = hourArray[hoursValue];
  alarminfo.style.display= "none";
  cancelButtondocument.style.display= "none";