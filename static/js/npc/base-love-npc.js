export class BaseLoveNpc {
  #lovePoint;
  #maxLovePoint;

  #imgLoveX;
  #imgLoveY;
  #imgLove;
  #imgLoveFrame;

  constructor() {
    this.#lovePoint = 2;
    this.#maxLovePoint = 5;

    this.#imgLoveX = 645;
    this.#imgLoveY = 50;
    this.#imgLove = new Image();
    this.#imgLove.src = "../../static/image/ui/heart.png";
    this.#imgLoveFrame = new Image();
    this.#imgLoveFrame.src = "../../static/image/ui/message-bubble-smal.png";
  }

  /**
   * @param {Number} point  1 || -1
   */
  addLovePoint(point) {
    // -1 방지
    if (this.#lovePoint === 0 && point < 0) return;
    // 6 이상 방지
    if (this.#lovePoint === 5 && point > 0) return;
    this.#lovePoint += point;
  }

  draw(ctx) {
    // 하트 틀
    ctx.drawImage(
      this.#imgLoveFrame,
      0,
      0,
      this.#imgLoveFrame.width,
      this.#imgLoveFrame.height,
      this.#imgLoveX,
      this.#imgLoveY,
      this.#imgLoveFrame.width / 2,
      this.#imgLoveFrame.height / 2
    );

    // 하트
    ctx.drawImage(
      this.#imgLove,
      0,
      0,
      this.#imgLove.width,
      this.#imgLove.height,
      this.#imgLoveX + 25,
      this.#imgLoveY + 5,
      30,
      30
    );

    ctx.fillStyle = "#E90000";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText(
      `x${this.#lovePoint}`,
      this.#imgLoveX + 60,
      this.#imgLoveY + 33
    );
  }

  get lovePoint() {
    return this.#lovePoint;
  }
}
