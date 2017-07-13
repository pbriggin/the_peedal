var consoleText = $('#consoleText')[0];
console.log(consoleText);
var rates = null;
var ratesPrev = null;
window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  rates = event.rotationRate;
  console.log(rates);
if (ratesPrev != null){
  if ((rates.alpha) >= (ratesPrev.alpha)) {
  	consoleText.innerText = 'Speed: ' + Math.abs(Math.round(rates.alpha));
  	ratesPrev = rates;
  }

} else {
	ratesPrev = rates;
}
   
});