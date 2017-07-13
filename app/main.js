var consoleText = $('#consoleText')[0];
console.log(consoleText);

window.addEventListener('devicemotion', function(event) {
  // console.log(event.acceleration.x + ' m/s2');
  var rates = event.rotationRate;
  console.log(rates);
  consoleText.innerText = 'Speed: ' + rates.alpha; 
});