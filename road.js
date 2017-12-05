function Road(ctx) {
  this.ctx = ctx;
}

Road.prototype.bgBlack = function(x, y, width, height) {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.rect(x, y, width, height);
  this.ctx.fill();
  this.ctx.closePath();
}

Road.prototype.highway1 = function(x, y, width, height){
  this.ctx.beginPath();
  this.ctx.fillStyle = "white";
  this.ctx.rect(x,y,width,height);
  this.ctx.fill();
  this.ctx.closePath();
}
Road.prototype.grass = function(x, y, width, height){
  this.ctx.beginPath();
  this.ctx.fillStyle = "green";
  this.ctx.rect(x,y,width,height);
  this.ctx.fill();
  this.ctx.closePath();
}

Road.prototype.draw = function(){
  var space = 20;
  var height = 40;
  this.bgBlack(0,0,1000,500);
  for(var i = 0, j = 0; i <= 8; i++){
    //this.highway1(space, 10, 90, 10);
    this.highway1(space, height, 90, 10);
    space += 140;
    if(i === 8 && j < 3) {
      i = 0;
      space = 20;
      height += 160;
      j ++;
    }
    // if(i % 7) {
    //   space = 0;
    //   height += 90;
    // }
}
  this.grass(0,500,1000,100);

}
