import { PopUpEvent } from "./event/pop-up-event.js";
import { PopUp } from "./pop-up.js";

class PopUpHandler {
  #interval; // PopUp간 간격
  #popUps;
  constructor() {
    this.#interval = 30;
    this.#popUps = [
      new PopUp(),
      new PopUp(25 + 230 + this.#interval),
      new PopUp(25 + 230 + this.#interval + 230 + this.#interval),
    ];
  }

  draw(ctx) {
    for (let popUp of this.#popUps) popUp.draw(ctx);
  }

  getNextChapterByMouse(mouse) {
    for (let popUp of this.#popUps)
      if (popUp.isHit(mouse)) return popUp.nextChapter;
  }

  /**
   * @param {PopUpEvent} event
   */
  updateByEvent(event) {
    const popUpFrames = event.popUpFrames;

    for (let i = 0; i < popUpFrames.length; i++) {
      const frame = popUpFrames[i];
      this.#popUps[i].updateByFrame(frame);
    }
  }
}

export const popUpHandler = new PopUpHandler();
