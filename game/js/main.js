(function () {
  const canvas = document.querySelector('.root');

  const context = canvas.getContext('2d');

  context.strokeText('Rectangle', 10, 10)
  context.strokeStyle = 'green';
  context.fillStyle = 'blue';
  context.shadowBlur = 10;
  context.shadowColor = 'brown';

  context.rect(10, 30, 80, 40);
  context.fill();
  context.stroke();



  context.strokeText('Crankle', 150, 10);
  context.moveTo(150, 40);
  const x = [150, 180, 210, 240, 270, 300];
  const y = [40, 80, 40, 80, 40, 80];
  for (let i = 0, length = x.length; i < length; i++) {
    context.lineTo(x[i], y[i]);
  }
  context.stroke();

})();