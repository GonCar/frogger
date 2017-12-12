function Over(ctx){
  this.ctx = ctx;
}


Over.prototype.gameover = function(x, y, width, height){
  console.log('Llego a Gameover');
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.rect(x, y, width, height);
  this.ctx.closePath();

}
