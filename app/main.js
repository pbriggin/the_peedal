var consoleTextA = $('#consoleTextA')[0];
var consoleTextB = $('#consoleTextB')[0];
var consoleTextG = $('#consoleTextG')[0];
// console.log(consoleTextA);
var rates = null;
var ratesPrev = null;
window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  rates = event.rotationRate;
  console.log(rates);
if (ratesPrev != null){
  if ((rates.alpha) >= (ratesPrev.alpha)) {
  	consoleTextA.innerText = 'SpeedA: ' + Math.abs(Math.round(rates.alpha));
  	ratesPrev.alpha = rates.alpha;
  }
  if ((rates.beta) >= (ratesPrev.beta)) {
  	consoleTextB.innerText = 'SpeedB: ' + Math.abs(Math.round(rates.beta));
  	ratesPrev.beta = rates.beta;
  }
  if ((rates.gamma) >= (ratesPrev.gamma)) {
  	consoleTextG.innerText = 'SpeedG: ' + Math.abs(Math.round(rates.gamma));
  	ratesPrev.gamma = rates.gamma;
  }

} else {
	ratesPrev = rates;
}
   
});