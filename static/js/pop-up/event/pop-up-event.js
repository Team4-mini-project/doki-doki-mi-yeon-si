import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { PopUpFrame } from "./pop-up-frame.js";

export class PopUpEvent extends BaseEvent {
  #popUpFrames;

  constructor(popUpFrames) {
    super(EVENT_TYPE.POPUP);
    this.#popUpFrames = popUpFrames;
  }

  /**
   * @param {PopUpFrame[]} popUpFrames
   */
  static toSelects(popUpFrames) {
    return new PopUpEvent(popUpFrames);
  }

  get popUpFrames() {
    return this.#popUpFrames;
  }
}
