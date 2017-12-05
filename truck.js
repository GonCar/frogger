function truck(ctx){
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "van.png";
  this.x = 500;
  this.y = 300;


}

Truck.prototype.draw = function() {
  this.ctx.drawImage();
}
