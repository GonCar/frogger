function Frog(ctx) {
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "images/frogger-half.png";

  this.scale = 1;

  this.x = 450;
  this.y = 490;
}

Frog.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale);
}
Frog.prototype.moveUp = function(){
  this.y -= 120;
}
Frog.prototype.moveDown = function(){
  this.y += 120;
}
Frog.prototype.moveRight = function(){
  this.x += 120;
}
Frog.prototype.moveLeft = function(){
  this.x -= 120;
}
