// var consoleTextA = $('#consoleTextA')[0];
// var consoleTextB = $('#consoleTextB')[0];
var consoleTextGRot = $('#consoleTextG');
var consoleTextG = $('#consoleTextG')[0];
var consoleTextGHi = $('#consoleTextGHi')[0];
console.log(consoleTextG);
var rates = null;
var ratesPrev = null;
window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  console.log(event);
  rates = event.rotationRate;
  console.log(rates);
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
  consoleTextG.innerText = Math.abs(Math.round(rates.gamma/6)) + ' RPM' + ' ' + Math.round(alpha);
  if (alpha != null) {
      consoleTextGRot.rotate(alpha);
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