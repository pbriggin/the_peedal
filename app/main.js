// Initilize DOM elements
var consoleTextG = $('#consoleTextG'); // this is the rotating DOM element in the center
var consoleTextAcc = $('#consoleTextAcc'); // this is the rotating DOM element in the center
var consoleTextGHi = $('#consoleTextGHi')[0]; // this holds the highest recodred rotation rate via devices gyroscope
var consoleTextAccHi = $('#consoleTextAccHi')[0]; // this holds the highest recodred acceleration rate (around z-axis) via devices accelerometer

// Initialize orientaion variables
var absolute = null
var alpha    = null
var beta     = null
var gamma    = null

// Listen for device to change orientation
window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
   absolute = event.absolute;
   alpha    = event.alpha;
   beta     = event.beta;
   gamma    = event.gamma;
}

// Initialize motion variables

var rates = null; // will hold the current rotation rate (gyroscope)
var ratesPrev = null; // will hold the previous rotation rate (gyroscope)

var acc = null; // will hold the current acceleration rate (accelerometer)
var accPrev = null; // will hold the previous acceleration rate (accelerometer)

// Listen for device motion
window.addEventListener('devicemotion', function(event) {

  rates = event.rotationRate; // returns as degrees per second
  acc = event.acceleration; // returns as meters per second^2

// Handiling the gyroscopic data
  if (ratesPrev != null){ // check for previous motion

    // we use the gamma axis for rotation

    if (Math.abs(rates.gamma) >= Math.abs(ratesPrev.gamma)) { // If current rate is greater than the previous rate
      consoleTextGHi.innerText = Math.abs(Math.round(rates.gamma/6)) + ' RPM'; // update the DOM text to highest rpm 
      ratesPrev.gamma = rates.gamma; // then set previous rate to current rate
    }

    if (consoleTextG[0]) { // check for corresponding DOM element
      consoleTextG[0].innerText = Math.abs(Math.round(rates.gamma/6)) + ' RPMs'; // refresh current rate 
    }

  } else {
    ratesPrev = rates; // if there has been np motion recorded yet, set it now
  }

// Handling the accelerometer data
  if (accPrev != null){ // check for previous motion

    // we use the x axis for acceration

    if (Math.abs(acc.x) >= Math.abs(accPrev.x)) {
      consoleTextAccHi.innerText = Math.abs(Math.round(acc.x / 9.81)) + ' Gs';
      accPrev.x = acc.x;
    }

    if (consoleTextAcc[0]) {
      consoleTextAcc[0].innerText = Math.abs(Math.round((acc.x / 9.81) * 10)/10) + ' Gs';
    }

  } else {
    accPrev = acc;
  }

  // Handle DOM orientation
  if (alpha != null) {

    if (consoleTextG[0]) { //check for corresponding DOM element (#consoleTextG)
      consoleTextG.rotate(alpha);
    }

    if (consoleTextAcc[0]) { //check for corresponding DOM element (#consoleTextAcc)
      consoleTextAcc.rotate(alpha);
    }
  }
});

