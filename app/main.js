// var consoleTextA = $('#consoleTextA')[0];
// var consoleTextB = $('#consoleTextB')[0];
var consoleTextGRot = $('#consoleTextG');
var consoleTextG = $('#consoleTextG')[0];
var consoleTextGHi = $('#consoleTextGHi')[0];

//Grab alpha offset from slider
var alphaOffset = $('#alphaOffset');
console.log(alphaOffset);

var rates = null;
var ratesPrev = null;

window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  rates = event.rotationRate;
  if (ratesPrev != null){
    if ((rates.alpha) >= (ratesPrev.alpha)) {
      // consoleTextA.innerText = 'SpeedA: ' + Math.abs(Math.round(rates.alpha));
      ratesPrev.alpha = rates.alpha;
    }
    if ((rates.beta) >= (ratesPrev.beta)) {
      // consoleTextB.innerText = 'SpeedB: ' + Math.abs(Math.round(rates.beta));
      ratesPrev.beta = rates.beta;
    }
    if (Math.abs(rates.gamma) >= Math.abs(ratesPrev.gamma)) {
      consoleTextGHi.innerText = Math.abs(Math.round(rates.gamma/6)) + ' RPM';
      ratesPrev.gamma = rates.gamma;
    }
    consoleTextG.innerText = Math.abs(Math.round(rates.gamma/6));
    if (alpha != null) {
        var alphaOff = alphaOffset.val()
        consoleTextGRot.rotate(alpha + alphaOff);
        console.log(alphaOff);
        console.log(alpha);
    }
    // console.log(alphaOff);
  } else {
    ratesPrev = rates;
  }
   
});


var absolute = null
var alpha    = null
var beta     = null
var gamma    = null

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
   absolute = event.absolute;
   alpha    = event.alpha;
   beta     = event.beta;
   gamma    = event.gamma;
  console.log(gamma);
  console.log(event);

  // Do stuff with the new orientation data
}