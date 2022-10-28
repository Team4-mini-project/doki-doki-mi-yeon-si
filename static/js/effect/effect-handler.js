import { EFFECT_NAMES } from "./const/effect-names.js";
import { EffectEvent } from "./event/effect-event.js";

class EffectHandler {
  #img;
  #imgName;
  #imgSize;
  #imgIndex;
  #isOn;
  #frame;
  constructor() {
    this.#img = new Image();
    this.#imgName = "";
    this.#imgSize = 0;
    this.#imgIndex = 0;
    this.#isOn = false;
    this.#frame = 0;
  }

  draw(ctx) {
    if (!this.#isOn || !this.#img.src) return;
    switch (this.#imgName) {
      case EFFECT_NAMES.LOVE:
        this.#drawLoveEffect(ctx);
        break;
    }
  }

  update() {
    if (!this.#isOn) return;
    if (this.#frame > 100) {
      this.#frame = 0;
      this.#imgIndex = 0;
      this.#isOn = false; // 이펙트는 한번 그리고 끈다.
    }
    this.#frame++;
    if (this.#frame % 3 === 0) this.#imgIndex++;
  }

  /**
   * @param {EffectEvent} event
   */
  updateByEvent(event) {
    this.#isOn = true;
    this.#imgName = event.src;
    this.#img.src = event.src;
  }

  // 호감도 이펙트 그리기
  #drawLoveEffect(ctx) {
    this.#imgSize = 95;
    ctx.drawImage(
      this.#img,
      this.#imgSize * this.#imgIndex,
      0,
      90,
      this.#img.height,
      630,
      20,
      110,
      110
    );
  }
}

export const effectHandler = new EffectHandler();
