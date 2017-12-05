var canvas = document.getElementById("canvas");
var ctx = this.canvas.getContext("2d");

var road = new Road(ctx);
var frog = new Frog(ctx);


setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  frog.draw();
  truck.draw();
}, 10);

window.onkeydown = function(event) {
  console.log(event.keyCode);
  
  frog.moveUp();
}
