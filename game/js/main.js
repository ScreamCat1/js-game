(function () {
  const canvas = document.querySelector('.root');

  const context = canvas.getContext('2d');
  context.moveTo(50, 70);
  context.lineTo(100, 50);
  context.stroke();
})();