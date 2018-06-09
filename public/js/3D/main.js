(function controlCanvas() {
   
  var canvas = document.getElementById('memecanvas'),
  ctx = canvas.getContext('2d');
  img = document.getElementById('start-image');

  initialize();

  function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }

  function redraw() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }



  var prevWidth;
  function resizeCanvas() {
    // Set up temporary canvas
    // var tempCanvas = document.createElement('canvas');
    // tempCanvas.width = canvas.width;
    // tempCanvas.height = canvas.height;
    // tmpCtx = tempCanvas.getContext('2d');
   
    // Copy to temporary canvas
    // tempCanvas.drawImage(canvas, 0, 0);

    if (getWidth() > 1200) 
    {
      canvas.width = window.innerWidth*0.5;
    }
    else
    {
      canvas.width = 600;
    }
    canvas.height = (canvas.width*3)/4;
    prevWidth = getWidth();
    // ctx = canvas.getContext('2d');
      // ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width, canvas.height);
    redraw();
  }

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

  // Only draw image after it's loaded
  img.onload = function() {
    var x = canvas.width/2 - img.width/2;
    var y = canvas.height/2 - img.height/2;
    ctx.drawImage(img, x, y);
  }

})();


