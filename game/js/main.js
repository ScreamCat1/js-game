(function () {
  const canvas = document.querySelector('.root');

  const context = canvas.getContext('2d');
  const image = new Image();
  let interval;
  image.onload = function() {
    context.drawImage(image, 10, 10, 32, 32);
    interval = setInterval(move, 200)
  }

  let  x = 10;
  function move () {
    if (x < 400) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, x, 10, 32, 32);
      x += 10;
    } else {
      x = 10;
    }
  }

  image.src = './images/smile.png';
})();