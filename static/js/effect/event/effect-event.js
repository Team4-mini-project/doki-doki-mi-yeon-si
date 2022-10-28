import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { EFFECT_NAMES } from "../const/effect-names.js";

export class EffectEvent extends BaseEvent {
  #src;
  constructor(name) {
    super(EVENT_TYPE.EFFECT);
    this.#src = name;
  }

  /**
   * 호감도 변화 이팩트를 그린다.
   */
  static drawLoveEffect() {
    return new EffectEvent(EFFECT_NAMES.LOVE);
  }

  get src() {
    return this.#src;
  }
}
