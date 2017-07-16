// var consoleTextA = $('#consoleTextA')[0];
// var consoleTextB = $('#consoleTextB')[0];
var consoleTextGRot = $('#consoleTextG');
var consoleTextG = $('#consoleTextG')[0];
var consoleTextGHi = $('#consoleTextGHi')[0];
var consoleTextAccHi = $('#consoleTextAccHi')[0];


//Grab alpha offset from slider
var alphaOffset = $('#alphaOffset');
console.log(alphaOffset);

var rates = null;
var ratesPrev = null;

window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  rates = event.rotationRate;
  acc = event.acceleration;
  if (ratesPrev != null){
    if (Math.abs(rates.gamma) >= Math.abs(ratesPrev.gamma)) {
      // consoleTextGHi.innerText = Math.abs(Math.round(rates.gamma/6)) + ' RPM';
      consoleTextGHi.innerText = Math.abs(Math.round(acc.x / 9.81)) + ' Gs';
      ratesPrev.gamma = rates.gamma;
    }
    // consoleTextG.innerText = Math.abs(Math.round(rates.gamma/6));
    consoleTextG.innerText = Math.abs(Math.round(acc.x / 9.81)) + ' Gs';
    if (alpha != null) {
        var alphaOff = alphaOffset.val()
        consoleTextGRot.rotate(alpha);
        console.log(alphaOff);
        console.log(alpha);
    }
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