var consoleText = $('#consoleText')[0];
console.log(consoleText);
var ratesPrev = null;
window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  var rates = event.rotationRate;
  console.log(rates);
if (ratesPrev != null){
  if (Math.abs(rates.alpha) > Math.abs(ratesPrev.alpha)) {
  	consoleText.innerText = 'Speed: ' + Math.abs(rates.alpha);
  }
}
   ratesPrev = rates;
});