var keys = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37
};

console.log(keys);

document.addEventListener("keyup", drawingWithKeyBoard);

function drawingWithKeyBoard(evento) {

  switch(evento.keyCode) {
    case keys.UP:
      console.log("Up!")
    break;
    case keys.DOWN:
      console.log("Down!")
    break;
    case keys.RIGHT:
      console.log("Right!")
    break;
    case keys.LEFT:
      console.log("Left!")
    break;
    default:
      console.log("Other key")
    break;
  }

}
