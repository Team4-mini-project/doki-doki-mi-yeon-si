class Hero {
  constructor() {
    this.x = 400;
    this.y = 0;

    this.width = 110;
    this.height = 110;

    this.img = new Image();
    this.img.src = "/static/image/game-1/hero.png";
  }

  update(mouse) {
    this.x = mouse.x;
    this.y = 600 - 100;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y,this.width+10,this.height+10);
  }
}

export default Hero;
