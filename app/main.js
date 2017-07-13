var consoleText = $('#consoleText')[0];
console.log(consoleText);
var ratesPrev = {alpha:0,beta:0,gamma:0};
window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  var rates = event.rotationRate;
  console.log(rates);

  if (Math.abs(rates.alpha) > Math.abs(ratesPrev.alpha)) {
  	consoleText.innerText = 'Speed: ' + Math.abs(rates.alpha);
  }
   var ratesPrev = rates;
});