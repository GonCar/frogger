function Gameover(ctx){
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "images/gameover.png";
  this.x = 1000;
  this.y = 500;
}

Gameover.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y);
}
