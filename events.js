var keys = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37
};

console.log(keys);

document.addEventListener("keyup", drawingWithKeyBoard);
var square = document.getElementById("drawArea");
var paper = square.getContext("2d");
var x = 150;
var y = 150;

drawingLine("red", x-1, y-1, x+1, y+1, paper)

function drawingLine(color, xinitial, yinitial, xfinal, yfinal, myCanvas) {
  myCanvas.beginPath();
  myCanvas.strokeStyle = color;
  myCanvas.lineWidth = 2;
  myCanvas.moveTo(xinitial, yinitial);
  myCanvas.lineTo(xfinal, yfinal);
  myCanvas.stroke();
  myCanvas.closePath();
}

function drawingWithKeyBoard(evento) {

  var newColor = "blue";
  var movement = 10;
  switch(evento.keyCode) {
    case keys.UP:
      drawingLine(newColor, x, y, x, y - movement, paper);
      y = y - movement;
      console.log("Up!");
    break;
    case keys.DOWN:
      drawingLine(newColor, x, y, x, y + movement, paper);
      y = y + movement;
      console.log("Down!");
    break;
    case keys.RIGHT:
      drawingLine(newColor, x, y, x + movement, y, paper);
      x = x + movement;
      console.log("Right!");
    break;
    case keys.LEFT:
      drawingLine(newColor, x, y, x - movement, y, paper);
      x = x - movement;
      console.log("Left!");
    break;
    default:
      console.log("Other key");
    break;
  }

}
