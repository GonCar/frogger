function Truck(ctx){
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "images/van.png";
  this.x = 1000;
  this.random = Math.floor(Math.random() * 4);
  this.y = this.random * 120 + 10;
  this.speed = 4;
}

Truck.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x,this.y);
  this.x -= this.speed;
}
