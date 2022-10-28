import { isHit } from "../global/index.js";
import { PopUpFrame } from "./event/pop-up-frame.js";

export class PopUp {
  #x;
  #y;
  #width;
  #height;
  #nextChapter;
  #text;
  #img;
  constructor(x = 35, y = 180, width = 230, height = 120) {
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;

    this.#img = new Image();
    this.#img.src = "../../static/image/ui/PopUpContainer.png";
  }

  draw(ctx) {
    this.#drawImage(ctx);
    this.#drawText(ctx);
  }

  /**
   * @param {PopUpFrame} frame
   */
  updateByFrame(frame) {
    this.#nextChapter = frame.nextChapterName;
    this.#text = frame.text;
  }

  isHit(obj) {
    return isHit(this, obj);
  }

  #drawImage(ctx) {
    ctx.drawImage(
      this.#img,
      31,
      34,
      this.#img.width - 31,
      this.#img.height - 34,
      this.#x,
      this.#y,
      this.#width,
      this.#height
    );
  }

  #drawText(ctx) {
    // 텍스트 : text가 문자열이라면 한 줄 출력
    ctx.fillStyle = "#2C3658";
    ctx.font = "bold 20px Arial";
    const x = this.#x + 10;
    const y = this.#y + 50;
    if (typeof this.#text === "string") {
      ctx.fillText(this.#text, x, y);
      return;
    }

    // text 문자열 배열이라면 멀티 라인 출력
    let lineInterval = 0;

    for (let oneLine of this.#text) {
      ctx.fillText(oneLine, x, y + lineInterval);
      lineInterval += 30;
    }
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get nextChapter() {
    return this.#nextChapter;
  }
}
