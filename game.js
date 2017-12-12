var canvas = document.getElementById("canvas");
var ctx = this.canvas.getContext("2d");

var road = new Road(ctx);
var frog = new Frog(ctx);
var over = new Over(ctx);
var gameover = new Gameover(ctx);
var trucks = [];
var cars = [];
trucks.push(new Truck(ctx));



setInterval(function(){
  trucks.push(new Truck(ctx));
}, 1000);

var guarda = setInterval(function() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  frog.draw();

  trucks.forEach(function(truck) {
    truck.draw();
  });


  if(collision() == true){
      clearInterval(guarda);
      ctx.clearRect(0,0,1000, 580);
      gameover.draw();
  }

}, 10);

var UP_KEY = 38;
var DOWN_KEY = 40;
var RIGHT_KEY = 39;
var LEFT_KEY = 37;
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

function collision(){
  var retorno = false;
  var x1frog =  frog.x;
  var y1frog = frog.y;
  var x2frog = frog.x + 100;
  var y2frog = frog.y + 100;

  trucks.forEach(function(truck){
    var x1truck = truck.x;
    var y1truck = truck.y;
    var x2truck = truck.x + 209;
    var y2truck = truck.y + 100;
    var result = ((x2frog > x1truck) && (x1frog < x2truck)) && ((y2frog  > y1truck) && (y1frog < y2truck));
    if(result === true){
      // vover.gameover();
      retorno = true;
    }


  });
  if(x1frog && x2frog > 1000 || x1frog && x2frog < 0){
    retorno = true;
  }

  return retorno;

}
