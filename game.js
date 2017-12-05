var canvas = document.getElementById("canvas");
var ctx = this.canvas.getContext("2d");

var road = new Road(ctx);
var frog = new Frog(ctx);


setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  frog.draw();
  //truck.draw();
}, 10);
var UP_KEY = 38;
var DOWN_KEY = 40;
var RIGHT_KEY = 39;
var LEFT_KEY = 41;
window.onkeydown = function(event) {
  if(event.keyCode == UP_KEY){
    frog.moveUp();
  }
  if(event.keyCode == DOWN_KEY){
    frog.moveDown();
  }
  if(event.keyCode == RIGHT_KEY){
    frog.moveRight();
  }
  if(event.keyCode == LEFT_KEY){
    frog.moveLeft();
  }

}
