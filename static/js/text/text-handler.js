import { TextEvent } from "./event/text-event.js";

class TextHandler {
  #x;
  #y;
  #width;
  #height;
  #img;
  #npcName;
  #text;
  #isOn;
  constructor() {
    this.#x = 25;
    this.#y = 450;
    this.#width = 780;
    this.#height = 120;

    this.#img = new Image();
    this.#img.src = "../../static/image/ui/TextContainer.png";
  }

  draw(ctx) {
    if (!this.#isOn) return;
    this.#drawContainer(ctx);
    this.#drawNpcName(ctx);
    this.#drawText(ctx);
  }

  /**
   * @param {TextEvent} textContainerEvent
   */
  updateByEvent(textContainerEvent) {
    this.#npcName = textContainerEvent.npcName ?? " ";
    this.#text = textContainerEvent.text;
    this.#isOn = textContainerEvent.setOnText ?? true;
  }

  // 컨테이너 이미지 그리기
  #drawContainer(ctx) {
    ctx.drawImage(
      this.#img,
      40,
      34,
      this.#img.width - 40,
      this.#img.height - 34,
      this.#x,
      this.#y,
      this.#width,
      this.#height
    );
  }

  // npc 이름 그리기
  #drawNpcName(ctx) {
    ctx.font = "bold 30px Arial";

    ctx.strokeStyle = "#E6D3A5";
    ctx.lineWidth = 6;
    ctx.strokeText(this.#npcName, 40, 440);

    ctx.fillStyle = "#F65175";
    ctx.fillText(this.#npcName, 40, 440);
  }

  // text 그리기
  #drawText(ctx) {
    // text가 문자열이라면 한 줄 출력
    ctx.fillStyle = "#2C3658";
    ctx.font = "bold 20px Arial";

    if (typeof this.#text === "string") {
      ctx.fillText(this.#text, 40, 480);
      return;
    }

    // text 문자열 배열이라면 멀티 라인 출력
    let lineInterval = 0;
    let y = 480;
    for (let oneLine of this.#text) {
      ctx.fillText(oneLine, 40, y + lineInterval);
      lineInterval += 30;
    }
  }
}

export const textHandler = new TextHandler();
