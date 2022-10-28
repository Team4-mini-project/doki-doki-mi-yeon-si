export class GameIntro {
  constructor() {
    this.x = 350;
    this.y = 400;

    this.indeximg = 3;
    this.img = new Image();
    this.img.src = `/static/image/game-1/${this.indeximg}.png`;
    this.frame = 0;
    this.onIntroFinish = null;
  }

  update() {
    if (this.onIntroFinish && this.indeximg < 0 && this.frame % 120 === 0) {
      this.#init();
      this.onIntroFinish();
    }
    console.log("indeximg ", this.indeximg);
    this.frame++;
    if (this.indeximg >= 0 && this.frame % 120 === 0) {
      this.indeximg -= 1;
      this.img.src = `/static/image/game-1/${this.indeximg}.png`;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
  }

  #init() {
    this.indeximg = 3;
    this.frame = 0;
    this.img.src = "";
  }
}
