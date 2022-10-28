export class textBorard {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.img = new Image();
  }

  update() {}

  setImgSrc(path) {
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
  }
}
