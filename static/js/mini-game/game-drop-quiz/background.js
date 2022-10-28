class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.img.src = "/static/image/game-1/background.png";
    this.imgCorrect = new Image();
    this.imgCorrect.src = "/static/image/game-2/success.png";
    this.imgWrong = new Image();
    this.imgWrong.src = "/static/image/game-2/wrong.png";
  }
  draw(ctx, result) {
    ctx.drawImage(this.img, 0, 0, 740, 370, 0, 0, 800, 600);
    if (result === true) ctx.drawImage(this.imgCorrect, 300, 150, 300, 300);
    if (result === false) ctx.drawImage(this.imgWrong, 300, 150, 300, 300);
  }
}
export default Background;
