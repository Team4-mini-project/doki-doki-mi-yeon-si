import { NPC_POSITION } from "../event/detail/draw-npc-event.js";

class NewLec {
  #x;
  #y;
  #faces; // 표정들 일러스트 경로
  #img; // default img size 400 1100
  #isOn;

  constructor() {
    this.#x = 0;
    this.#y = 80;
    this.#faces = {
      default: "../../static/image/npc/newlec/Newlec_default.png",
    };
    this.#img = new Image();
    this.#img.src = this.#faces.default;
    this.#isOn = false;
  }

  draw(ctx) {
    if (!this.#isOn) return;

    ctx.drawImage(
      this.#img,
      0,
      0,
      this.#img.width,
      this.#img.height,
      this.#x,
      this.#y,
      230,
      687
    );
  }

  show(face, position) {
    switch (position) {
      case NPC_POSITION.CENTER:
        this.#isOn = true;
        this.#x = 280;
        break;
      case NPC_POSITION.LEFT:
        this.#isOn = true;
        this.#x = 0;
        break;

      case NPC_POSITION.RIGHT:
        this.#isOn = true;
        this.#x = 500;
        break;
      case NPC_POSITION.HIDE:
        this.#isOn = false;
    }
  }
}

export const newlec = new NewLec();
